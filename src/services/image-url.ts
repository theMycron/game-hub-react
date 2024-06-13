import noImage from "../assets/image-placeholder.webp";

const getCroppedImageUrl = (imageUrl: string) => {
  if (!imageUrl) return noImage;
  const terminus = "media/";
  const index = imageUrl.indexOf(terminus) + terminus.length;
  const newUrl =
    imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
  return newUrl;
};

export default getCroppedImageUrl;
