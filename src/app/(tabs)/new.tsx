import { Text, View, Image, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import Button from "@/src/components/Button";
import { upload } from "cloudinary-react-native";
import { cld, uploadImg } from "@/src/lib/cloudinary";
import { UploadApiResponse } from "cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params";

export default function CreatePost() {
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if (!image) {
            pickImage();
        }
    }, [image])
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

  
    const createPost = async () => {
        if(!image){
            return;
        }
        const response = await uploadImg()

        console.log('image id: ', response?.public_id )
    }
    return (
        <View className="p-3 items-center flex-1">
            {image ? (
                <Image className="w-52 aspect-[3/4] rounded-lg bg-slate-300 "
                    source={{ uri: image }}
                />
            ) : <View className="aspect-[3/4] rounded-lg bg-slate-300" />}

            <Text onPress={pickImage}
                className="text-blue-500 font-semibold m-5">Change</Text>

            <TextInput value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder="Wha is on your mind "
                className=" w-full p-3"
            />
            <View className="mt-auto w-full">
                <Button onPress={() => { createPost }} title='Share Post' />

            </View>





        </View>
    );
}
