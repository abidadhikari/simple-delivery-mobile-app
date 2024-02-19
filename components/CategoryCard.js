import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function CategoryCard(props) {
  const navigation = useNavigation();
  const { imgUrl, title } = props;
  return (
    <TouchableOpacity
      className="relative mr-2"
      onPress={() => Alert.alert("App developed by Abid Adhikari")}
    >
      <Image
        source={{ uri: imgUrl }}
        className="h-[100px] w-[100px] rounded-md "
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
