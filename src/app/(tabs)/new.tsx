import { Text, View, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function CreatePost() {

    const [caption, setCaption] = useState('')
    return (
        <View className="p-3 items-center flex-1">
            <Image className="w-52 aspect-[3/4] rounded-lg " source={{ uri: 'https://pbs.twimg.com/profile_images/1842539587786199040/DRiMD9wv_400x400.jpg' }} />

            <Text onPress={() => { }}
                className="text-blue-500 font-semibold m-5">Change</Text>

            <TextInput value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder="Wha is on your mind "
                className=" w-full p-3"
            />
            <View className="mt-auto w-full">
                <Pressable className="bg-blue-500  w-full p-3 items-center rounded-md  ">
                    <Text className="text-white font-semibold">Share</Text>
                </Pressable>

            </View>





        </View>
    );
}
