
import React from 'react';
import { AppStep } from '../types';

interface StepperProps {
  currentStep: AppStep;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Step = ({ title, isCompleted, isActive }: { title: string, isCompleted: boolean, isActive: boolean }) => {
    const circleBaseClasses = "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300";
    const circleColorClasses = isCompleted ? 'bg-green-600' : isActive ? 'bg-yellow-500 border-2 border-white ring-2 ring-yellow-500' : 'bg-gray-300';
    
    return (
        <div className="flex flex-col items-center">
            <div className={`${circleBaseClasses} ${circleColorClasses}`}>
                {isCompleted && <CheckIcon />}
            </div>
            <p className={`mt-2 text-xs text-center ${isActive || isCompleted ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{title}</p>
        </div>
    );
};

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
    const steps = ['Selecione o modelo', 'Informe as medidas', 'Seu tamanho Ideal'];
    const activeStepIndex = currentStep;

    return (
        <div className="w-full px-4 sm:px-8 py-8">
            <div className="flex items-center">
                {steps.map((title, index) => (
                    <React.Fragment key={title}>
                        <Step 
                            title={title} 
                            isCompleted={index < activeStepIndex}
                            isActive={index === activeStepIndex}
                        />
                        {index < steps.length - 1 && (
                            <div className={`flex-1 h-1 transition-colors duration-300 ${index < activeStepIndex ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
      