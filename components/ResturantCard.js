import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function ResturantCard(props) {
  const {
    imgUrl,
    title,
    id,
    rating,
    genre,
    address,
    dishes,
    short_description,
    long,
    lat,
  } = props;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow "
      onPress={() => {
        navigation.navigate("Resturant", {
          imgUrl,
          title,
          id,
          rating,
          genre,
          address,
          dishes,
          short_description,
          long,
          lat,
        });
      }}
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>. {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="green" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
