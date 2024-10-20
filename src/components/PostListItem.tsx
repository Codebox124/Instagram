import posts from '@/assets/data/posts.json'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

import { AdvancedImage } from 'cloudinary-react-native';

import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from '../lib/cloudinary';


export default function PostListItem({ post }) {
    const image = cld.image(post.image);

    image
        .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
        .roundCorners(byRadius(20));//rounded the camera

    const avatar = cld.image(post.user.avatar_url)
    avatar
        .resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));
    return (
        <View className="bg-white">
            <View className="p-3 items-center gap-2 flex-row">
                <AdvancedImage cldImg={avatar} className="w-12 aspect-square rounded-full" />
                {/* <Image source={{ uri: post.user.image_url }}  /> */}
                <Text className="font-semibold">{post.user.username}</Text>
            </View>

            <AdvancedImage cldImg={image} className="w-full aspect-[4/3]" />

            <View className="flex-row gap-3 p-3">
                <AntDesign

                    name='hearto'
                    size={20}

                />
                <Ionicons name="chatbubble-outline" size={20} />
                <Feather name="send" size={20} />

                <Feather name="bookmark" size={20} className="ml-auto" />
            </View>

        </View>
    );

}