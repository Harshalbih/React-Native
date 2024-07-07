import { View, Text } from "react-native";

export default function Greet({name}){
    return(
        <View>
            <Text> Hello  {name} , This is custom component</Text>
        </View>
    )
}