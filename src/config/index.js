const isDevelopment = process.env.NODE_ENV === "development";

export default {
  img_server: isDevelopment ? "/api" : import.meta.env.VITE_image_server,
  resume_link: import.meta.env.VITE_resume_link,
};
