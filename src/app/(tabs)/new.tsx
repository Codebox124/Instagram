import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NewScreen() {
    return (
        <View>
            <Text>About Me</Text>
            <Link href='/' >Feeds</Link>

        </View>
    );
}
