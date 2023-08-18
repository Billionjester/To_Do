import ImagePicker from 'react-native-image-crop-picker';

// Call single image picker with cropping
// from galley
const openPicker = async (options: any) => {
  options['includeBase64'] = true;
  console.log(options, 'allOption');
  return ImagePicker.openPicker(options)
    .then(image => {
      return image;
    })
    .catch(err => {
      return err;
    });
};

// Call multiple image picker

const openPickerMultiple = (options: any) => {
  options['includeBase64'] = true;
  ImagePicker.openPicker({
    multiple: true,
    ...options,
  }).then(images => {
    console.log(images);
  });
};
const openCamera = async (options: any) => {
  return ImagePicker.openCamera({
    width: 100,
    height: 100,
    // cropping: true,
    // includeBase64: true,
    cropperCircleOverlay: options.cropperCircleOverlay,
    ...options,
  })
    .then(image => {
      console.log(image, 'Image from camera');
      return image;
    })
    .catch(err => {
      return err;
    });
};
export {openPicker, openCamera, openPickerMultiple};
