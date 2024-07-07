import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Dimensionapi() {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    const styles = StyleSheet.create({
        box: {
            flex: 1,
            backgroundColor: "#00ccff",
            padding: 60,
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "70%" : "90%",
            marginTop: 50
        },
        title: {
            color: "black",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            fontSize: windowWidth > 500 ? 50 : 24,
        },
    });

    return (
        <View style={styles.box}>
            <Text style={styles.title}> DimensionAPI Component</Text>
        </View>
    );
}
