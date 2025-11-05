# Script para renomear arquivos e pastas, removendo acentos, substituindo espaços por underline e removendo '_-_'

# Função para substituir '_-_' por '_'
function Remove-DoubleUnderscore
{
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [string]$String
    )
    
    return $String -replace '_\-_', '_'
}

# Função para remover acentos
function Remove-StringDiacritics
{
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [string]$String
    )
    
    $normalized = $String.Normalize([Text.NormalizationForm]::FormD)
    $sb = New-Object Text.StringBuilder
    
    for ($i = 0; $i -lt $normalized.Length; $i++) {
        $c = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($normalized[$i])
        if ($c -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$sb.Append($normalized[$i])
        }
    }
    
    return ($sb.ToString().Normalize([Text.NormalizationForm]::FormC))
}

# Função para renomear arquivos e pastas
function Rename-FilesAndFolders
{
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )
    
    # Primeiro processa os arquivos
    Get-ChildItem -Path $Path -Recurse -File | ForEach-Object {
        # Primeiro remove os acentos
        $newName = Remove-StringDiacritics $_.Name
        # Depois substitui espaços por underline
        $newName = $newName -replace '\s+', '_'
        # Por fim, substitui '_-_' por '_'
        $newName = Remove-DoubleUnderscore $newName
        $newPath = Join-Path $_.DirectoryName $newName
        
        if ($_.FullName -ne $newPath) {
            try {
                Rename-Item -Path $_.FullName -NewName $newName -ErrorAction Stop
                Write-Host "Arquivo renomeado: $($_.Name) -> $newName"
            } catch {
                Write-Warning "Não foi possível renomear $($_.Name) para $newName : $_"
            }
        }
    }
    
    # Depois renomeia as pastas (em ordem reversa para evitar problemas com caminhos)
    Get-ChildItem -Path $Path -Recurse -Directory | 
        Sort-Object -Property FullName -Descending | 
        ForEach-Object {
            $newName = $_.Name | Remove-StringDiacritics
            $newName = $newName -replace '\s+', '_'  # Substitui espaços por underline
            $newName = $newName -replace '[^\w\d\.\-]', ''  # Remove caracteres especiais
            
            if ($_.Name -ne $newName) {
                $newPath = Join-Path $_.Parent.FullName $newName
                Write-Host "Renomeando pasta '$($_.FullName)' para '$newPath'"
                Rename-Item -Path $_.FullName -NewName $newName -Force
            }
        }
}

# Executa a função na pasta img
Rename-FilesAndFolders -Path "$PSScriptRoot\img"

Write-Host "Processo concluído!" -ForegroundColor Green
