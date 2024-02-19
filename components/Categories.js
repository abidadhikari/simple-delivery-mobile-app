import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories(props) {
  const { num } = props;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pl-4"
    >
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="First Title"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Second Title"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Third Title"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Fourth Title"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Fifth Title"
      />
    </ScrollView>
  );
}
