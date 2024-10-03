import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function About() {
    return (
        <View>
            <Text>About Me</Text>
            <Link href='/' >Feeds</Link>

        </View>
    );
}
