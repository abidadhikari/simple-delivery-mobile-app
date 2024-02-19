import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

export default function ResturantScreen(props) {
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const dummyMenu = [
    {
      id: "001",
      name: "Chicken MoMo",
      description:
        "Chicken momos are a popular recipe in household terms in Nepal.",
      price: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
    },
    {
      id: "002",
      name: "Veg MoMo",
      description:
        "Veg momos are a popular recipe in household terms in Nepal.",
      price: 2,
      image:
        "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    },
    {
      id: "003",
      name: "Buff MoMo",
      description:
        "Buff momos are a popular recipe in household terms in Nepal.",
      price: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
    },
    {
      id: "004",
      name: "Pork MoMo",
      description:
        "Pork momos are a popular recipe in household terms in Nepal.",
      price: 2,
      image:
        "https://t3.ftcdn.net/jpg/06/16/85/60/360_F_616856040_zCvPMQkPFOWsVb3Hxo7mQUYzlzciFCZs.jpg",
    },
    {
      id: "005",
      name: "Paneer MoMo",
      description:
        "Chicken momos are a popular recipe in household terms in Nepal.",
      price: 2,
      image: "https://recipes.timesofindia.com/thumb/60275824.cms",
    },
  ];
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="w-full bg-slate-50 relative">
          <Image
            source={{ uri: imgUrl }}
            className="h-56 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00cc88" />
          </TouchableOpacity>
        </View>
        <View className="bg-white px-4">
          <View className=" pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text>. {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="green" size={22} opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row space-x-2 py-4">
            <QuestionMarkCircleIcon size={20} color="#00cc88" />
            <Text className="">HAVE A FOOD ALERGY?</Text>
          </TouchableOpacity>
        </View>

        <View className=" mt-3 pb-32">
          <Text className="font-bold text-lg mb-2 px-4">Menu</Text>
          {dummyMenu.map((e, i) => {
            return (
              <DishRow
                key={e.id}
                id={e.id}
                name={e.name}
                description={e.description}
                price={e.price}
                image={e.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
