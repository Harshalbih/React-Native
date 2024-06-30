import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, ionicons } from "@expo/vector-icons";
const logo = require("../../assets/images/react-logo.png");
import { useState } from "react";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false); //for Modal
  const [notificationBar, setNotificationBar] = useState(false); //for StatusBar
  const [activityInd, setActivityInd] = useState(false); //for StatusBar
  function foractivity() {
    setActivityInd(true);
    setTimeout(() => {
      alert("Loaded");
      setActivityInd(false);
    }, 3000);
  }

  return (
    <>
      {/* Tabs section  */}
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color }) => <Ionicons name="albums" size={24} />,
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            tabBarLabel: "Products",
            tabBarIcon: ({ color }) => <Ionicons name="apps" size={24} />,
          }}
        />
      </Tabs>

      {/* View component */}
      {/* <View style={{flex:1, backgroundColor:'gray'}}>
        <View style={{width:200, height:200, backgroundColor:'green'}}>
        </View>
    </View> */}

      {/* Text component */}
      {/* <View style={{flex:1, backgroundColor:'gray'}}>
        <Text>India Won Today!</Text>
    </View> */}

      {/* Image component */}
      {/* <View style={{flex:1,}}>
        <Image source ={logo} style={{width:100, height:100}} />
        <Image source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FzNowL5xtyLe4hajNtegzUtYhvrtfhnzkg&s"}} style={{width:200, height:150}} />
    </View> */}

      {/* Scroll component */}
      {/* <View style={{flex:1, padding: 60}}>
        <ScrollView>
            <Image source ={logo} style={{width:100, height:100}} />
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia unde, culpa illum ab inventore accusamus ducimus obcaecati sit recusandae quo facilis dignissimos eum odit eveniet architecto laboriosam? Impedit, consectetur voluptatum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia unde, culpa illum ab inventore accusamus ducimus obcaecati sit recusandae quo facilis dignissimos eum odit eveniet architecto laboriosam? Impedit, consectetur voluptatum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia unde, culpa illum ab inventore accusamus ducimus obcaecati sit recusandae quo facilis dignissimos eum odit eveniet architecto laboriosam? Impedit, consectetur voluptatum!
            </Text>   
            <Image source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FzNowL5xtyLe4hajNtegzUtYhvrtfhnzkg&s"}} style={{width:200, height:150}} />
        </ScrollView>
    </View> */}

      {/* Button component */}
      {/* <View style={{flex:1, padding: 60}}>
        <Button title='Click Here' onPress={()=> alert("Button pressed")} color="midnightblue" />
    </View> */}

      {/* Pressable component */}
      <View style={{ flex: 1, padding: 60 }}>
        <Pressable
          onPress={() => alert("I love India")}
          onLongPress={() => alert("Loving India too much")}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FzNowL5xtyLe4hajNtegzUtYhvrtfhnzkg&s",
            }}
            style={{ width: 200, height: 150 }}
          />
        </Pressable>
      </View>

      {/* Pressable component */}
      {/* <View style={{flex:1, padding: 60}}>
        <Button title='Open Modal' onPress={()=> setModalVisible(true)} color="midnightblue" />

        <Modal visible={modalVisible} 
        onRequestClose={()=> setModalVisible(false)} //used when user press back button or gesture
        animationType='fade'
        >
            <View style={{backgroundColor: 'lightblue', height:300, width:300, padding:100}}>
                <Text>Model Content</Text>
                <Button title='Close Modal' onPress={()=>setModalVisible(false)} color="red"/>
            </View>
        </Modal>
    </View> */}

      {/* StatusBar component */}
      {/* <View style={{flex:1, padding: 60}}>
        <Button title='Full Screen' onPress={()=> setNotificationBar(!notificationBar)} color="midnightblue" />
        <StatusBar barStyle='dark-content' backgroundColor='lightgreen' hidden={notificationBar}/>
    </View> */}

      {/* ActivityIndicator component */}
      {/* <View style={{flex:1, padding: 60}}>
        <Button title='Show Loading' onPress={foractivity} color="midnightblue" />
        <ActivityIndicator size='large' color='midnightblue' animating={activityInd} />
    </View> */}

      {/* Alert component */}
      <View style={{ flex: 1, padding: 60 }}>
        <Button
          title="Show Alert"
          color="midnightblue"
          onPress={() =>
            Alert.alert("Alert Title", "Alert Message", [
              { text: "proceed", onPress: () => console.log("proceeded") },
              { text: "cancel", onPress: () => console.log("canceled") },
            ])
          }
        />
      </View>
    </>
  );
}
