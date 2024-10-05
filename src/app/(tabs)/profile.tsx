import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View>
            <Text>About Me</Text>
            <Link href='/' >Feeds</Link>

        </View>
    );
}
