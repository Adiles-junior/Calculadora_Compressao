import { Cloudinary } from 'cloudinary-core';

const cloudinaryCore = new Cloudinary({
  cloud_name: 'dtsfzchkk', // Substitua pelo seu cloud_name se for diferente
  secure: true
});

export default cloudinaryCore;
