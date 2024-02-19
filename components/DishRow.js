import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  StarIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

export default function DishRow(props) {
  const { id, name, description, price, image } = props;
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = () => {
    if (!items.length) {
      return;
    } else {
      //   console.log("This will work");
      dispatch(removeFromBasket({ id }));
    }
  };
  return (
    <>
      <TouchableOpacity
        className={` bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => {
          setIsPressed(!isPressed);
        }}
      >
        <View className="flex-row justify-between ">
          <View className="w-[70%]">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">${price}.00</Text>
          </View>
          <View className="">
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
                height: 100,
                width: 100,
              }}
              source={{
                uri: image,
              }}
              className="p-4 rounded-lg"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
