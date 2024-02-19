import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Platform,
  NativeModules,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { StatusBarManager } = NativeModules;
import {
  ChevronDownIcon,
  UserIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlledLayout from "../layout/ControlledLayout";
// import data from "../dummydata/data.json";
// import { getResturantsList } from "../features/Resturants/resturantAction";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const callData = async () => {
    try {
      const req = await fetch("/dummydata/data.json");
      const data = await req.json();
      // console.log("My datya", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // dispatchEvent(getResturantsList());
  }, []);
  return (
    <ControlledLayout>
      <View>
        <View className="flex-row p-3 items-center  gap-2 bg-slate-50 w-full">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 rounded-full bg-slate-300 p-4"
          />

          <View className="flex-1">
            <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
            <Text className="font-bold text-xl flex-row items-center">
              Current Location <ChevronDownIcon size={20} color="#00cc88" />{" "}
            </Text>
          </View>
          <UserIcon size={35} color="#00cc88" />
        </View>
        {/* SEARCH  */}
        <View className="flex-row items-center space-x-2 pb-2 pr-3  pl-4 bg-slate-50">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
            {/* <SearchIcon size={35} color="#00cc88" /> */}
            <MagnifyingGlassIcon size={20} color="#00cc88" />

            <TextInput
              placeholder="Resturants and cusines"
              keyboardType="default"
              className=" w-auto flex-1"
            />
          </View>
          <AdjustmentsVerticalIcon size={20} color="#00cc88" />
        </View>

        {/* BODY  */}
        <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
          <Categories />
          <FeatureRow
            title="Featured"
            description="Paid placements from our partners"
          />
          <FeatureRow
            title="Featured"
            description="Paid placements from our partners"
          />
          <FeatureRow
            title="Featured"
            description="Paid placements from our partners"
          />
        </ScrollView>
      </View>
    </ControlledLayout>
  );
};

export default HomeScreen;
