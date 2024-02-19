import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  UserIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ArrowRightIcon,
} from "react-native-heroicons/outline";
import CategoryCard from "./CategoryCard";
import ResturantCard from "./ResturantCard";

export default function FeatureRow(props) {
  const { title, description } = props;
  return (
    <>
      <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{title}</Text>
          <ArrowRightIcon color="#00cc88" />
        </View>
        <Text className="px-4 text-gray-500 text-xs">{description}</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="mt-2"
        >
          {[...Array(6)].map((e, i) => {
            return (
              <ResturantCard
                key={i}
                imgUrl="https://images.foodmandu.com//Images/Vendor/1498/OriginalSize/web-cover-biryani-adda-min_190922070609.jpg"
                title="Old Ebbitt Grill"
                id={223}
                rating={4.5}
                genre="Japanese"
                address="123 main strret"
                dishes={[]}
                short_description="The Old Ebbitt Grill, Washington's oldest saloon, was founded in 1856 when, according to legend, innkeeper William E. Ebbitt bought a boarding house. Today, no one can pinpoint the house’s exact location, but it was most likely on the edge of present-day Chinatown."
                long={20}
                lat={0}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
