import imageCompression from "browser-image-compression";

interface ImageFile extends File {
  src?: string;
}

class ImageCompressor {
  static async compressWithQuality(
    file: ImageFile,
    quality: number = 0.5
  ): Promise<File> {
    if (quality > 0 && quality < 1.0) {
    }

    const options = {
      initialQuality: 0.3,
    };

    return imageCompression(file, options);
  }

  static async compressWithDesiredSize(
    file: ImageFile,
    desiredSize: number
  ): Promise<File> {
    if (desiredSize > 0) {
    }

    const options = {
      initialQuality: 0.3,
    };

    return imageCompression(file, options);
  }
}

export default ImageCompressor;
