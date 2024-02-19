import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

export default function BasketIcon() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className={`mx-5 bg-[#00cc88] p-4 rounded-lg flex-row items-center space-x-1 `}
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white text-lg text-center ">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${basketTotal}.00
        </Text>
      </TouchableOpacity>
    </View>
  );
}
