import {v2 as cloudinary} from "cloudinary"
import fs from "fs"    // fs - file system

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        //upload file in cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //File has been uploaded successfully.
        console.log("File is uploaded at cloudinary", 
            response.url);
            return response;
    }catch(error){
        fs.unlinkSync(localFilePath)  //remove the locally saved temporary file as the uplaod operation got failed.
        return null;
    }
}

export {uploadOnCloudinary}
