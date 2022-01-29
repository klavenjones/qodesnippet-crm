import axios from "axios";
import { PLACEHOLDER } from "./constants";

export const uploadImage = async (image) => {
  console.log("IMAGE", image);
  try {
    if (image.length === 0 || typeof image === "string") {
      return PLACEHOLDER;
    }
    const formData = new FormData();
    for (const file of image) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "qodesnippet-upload");
    const imageUpload = await axios.post(
      "https://api.cloudinary.com/v1_1/klayjones/image/upload",
      formData
    );
    return imageUpload?.data.secure_url;
  } catch (error) {
    console.log(error.message);
    return "Something went wrong";
  }
};
