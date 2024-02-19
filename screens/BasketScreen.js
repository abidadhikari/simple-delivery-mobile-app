import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItems } from "../features/basketSlice";
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

export default function BasketScreen() {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  useMemo(() => {}, [items]);
  return (
    <ControlledLayout>
      <View className="bg-gray-100  h-full relative">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">Resturant Title</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute rounded-full bg-gray-100 top-3 right-5"
          >
            <XCircleIcon color="#00cc88" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className=" text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <ScrollView className="divide-y divide-gray-200 ">
            {items.map((e, i) => {
              return (
                <View
                  key={i}
                  className="flex-row items-center space-x-3 bg-white py-2 px-5"
                >
                  <Text>{i} X </Text>
                  <Image
                    source={{ uri: e.image }}
                    className="h-12 w-12 rounded-full"
                  />
                  <Text>
                    {e.name} {i}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View className="p-5 bg-white mt-5 space-y-4  h-fit  bottom-0 w-full left-0">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">$2.00</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$0</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Total</Text>
            <Text className="text-font-extrabold">$2.00</Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00ccbb] p-4"
            onPress={() => navigation.navigate("PreparingOrderScreen")}
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ControlledLayout>
  );
}
