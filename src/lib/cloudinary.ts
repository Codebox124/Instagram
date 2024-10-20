import { Cloudinary } from "@cloudinary/url-gen";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { upload } from "cloudinary-react-native";
import { UploadApiResponse } from "cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params";
export const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME,
    }
});

export const uploadImg = async () => {

    if (!image) {
        return;
    }
    const options = {
        upload_preset: 'Default',
        unsigned: true,
    }

    return new Promise<UploadApiResponse>(async (resolve, reject) => {

        await upload(cld, {
            file: image,
            options: options,
            callback: (error, response) => {
                if(error || !response){
                    reject(error)
                }else{
                    resolve(response)
                }
                //.. handle response
                console.log('error', error)
                console.log('response', response?.public_id)

            }
        })

    })

}