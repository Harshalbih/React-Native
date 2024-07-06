import { View, Text , StyleSheet, Dimensions} from "react-native";

export default function Dimensionapi(){
    return(
        <View style={styles.box}>
            <Text style={styles.title}> DimesionAPI </Text>  
        </View>
    )
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles= StyleSheet.create({
    box: {flex:1 , backgroundColor: "yellow", padding:60,
        width: windowWidth > 500 ? "70%"  : "90%",
        height: windowHeight >600 ? "70%" : "90%"
    },
    title: {color: "black", textAlign: "center", justifyContent: 'center', alignItems:'center',
        fontSize: windowWidth>500 ? 50 :24, 
        }
}) 