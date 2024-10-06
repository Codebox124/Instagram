import { Link } from "expo-router";
import { Image, Text, TextInput, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";
import Button from "@/src/components/Button";
export default function ProfileScreen() {
    const [image, setImage] = useState<string | null>(null);
    const [username, setUsername] = useState('')

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
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <View className="p-3 flex-1">
            {image ? (
                <Image className="w-52 aspect-square self-center rounded-full bg-slate-300 "
                    source={{ uri: image }}
                />
            ) : <View className="aspect-square self-center rounded-full bg-slate-300" />}
            <Text onPress={pickImage}
                className="text-blue-500 self-center font-semibold m-5">Change
            </Text>

            <Text className="mb-2 text-gray-700 font-semibold">UserName</Text>
            <TextInput
                className="border border-gray-300 p-3  rounded-md"
                placeholder="Username.."
                value={username}
                onChangeText={setUsername}
            />
            <View className="gap-2 mt-auto">

                <Button onPress={() => { }} title='Update Profile' />
                <Button onPress={() => { }} title='Signout' />
            </View>


        </View>
    );
}
