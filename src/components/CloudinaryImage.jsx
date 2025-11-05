import React from 'react';
import { Image } from 'cloudinary-react';

const CloudinaryImage = ({ publicId, width = 300, height = 200, crop = 'fill', ...props }) => {
  return (
    <Image
      cloudName="dtsfzchkk"
      publicId={publicId}
      width={width}
      height={height}
      crop={crop}
      {...props}
    />
  );
};

export default CloudinaryImage;
