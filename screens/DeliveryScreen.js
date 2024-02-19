import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import ControlledLayout from "../layout/ControlledLayout";
import {
  ArrowLeftIcon,
  StarIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import * as Animatiable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  return (
    <ControlledLayout
      customStyles={{ backgroundColor: "#00ccbb", height: "100%" }}
    >
      <View className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at KFC is being prepared
          </Text>
        </View>
      </View>
      <MapView
        // mapType="mutedStandard"
        className="w-full flex-1 -mt-10 z-0"
        initialRegion={{
          latitude: 27.674141,
          longitude: 85.374603,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 27.674141, longitude: 85.374603 }}
          title="The Burger House and Crunchy Fried Chicken "
          identifier="origin"
          pinColor="#00ccbb"
        ></Marker>
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Abid Adhikari</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </View>
    </ControlledLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
