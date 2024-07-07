import { View, Text , StyleSheet} from "react-native";

export default function StyleRN(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Hello, This is style component </Text>
           <View>
            <Text style={[styles.box, styles.title]}> I'm using array style</Text></View>   
        </View>
    )
}
const styles= StyleSheet.create({
    container: {flex:1 , backgroundColor: "plum", padding:60},
    title: {fontSize: 14, color: "black", textAlign: "center"},
    box: {width: 150, height: 150, backgroundColor: "lightgreen", alignItems:"center", justifyContent:"center"}
})