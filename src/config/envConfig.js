export const imgUrl = "https://heritage-despite-relaxation-became.trycloudflare.com/";
export const url = `${imgUrl}api/v1/`;

// Function to get the base API URL
export const getBaseUrl = () => url;

// Function to get the image base URL
export const getImageBaseUrl = () => imgUrl;

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";

  // If it's already a full URL, return as-is
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  // Remove trailing slash from base and leading slash from path
  const base = imgUrl.replace(/\/+$/, "");
  const path = imagePath.replace(/^\/+/, "");

  const finalUrl = `${base}/${path}`;
  // console.log("Image URL:", finalUrl);

  return finalUrl;
};
