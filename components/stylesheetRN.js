import { View, Text , StyleSheet} from "react-native";

export default function StyleRN(){
    return(
        <View style={styles.container}>
            <Text> Hello </Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {flex:1 , backgroundColor: "plum", padding:60}
})