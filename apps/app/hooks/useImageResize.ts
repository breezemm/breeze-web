import Resizer from "react-image-file-resizer";

const useImageResize = (file: any) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "PNG",
      85,
      0,
      (uri: any) => {
        resolve(uri);
      },
      "base64"
    );
  });
};

export default useImageResize;
