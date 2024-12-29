export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getVideoUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
