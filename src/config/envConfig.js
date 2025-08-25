// Function to get the base API URL
export const url =
  "http://10.10.20.48:3055/api/v1/";
export const getBaseUrl = () => {
  return url;
};
export const imgUrl =
  "http://10.10.20.48:3055";

// Function to get the image base URL
export const getImageBaseUrl = () => {
  return url;
  
};
 
export const getImageUrl = (imagePath) => {
  if (imagePath.includes("http")) {
    return imagePath;
  }

  return `${imgUrl}${imagePath}`;
};