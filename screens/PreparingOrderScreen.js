import { View, Text } from "react-native";
import React, { useEffect } from "react";
import ControlledLayout from "../layout/ControlledLayout";
import orderProcessingImage from "../assets/orderProcessing.gif";
import * as Animatiable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);
  return (
    <ControlledLayout className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatiable.Image
        source={orderProcessingImage}
        className="h-96 w-96"
        iterationCount={1}
        animation="slideInUp"
      />
      {/* <Text>PreparingOrderScreen</Text> */}
      <Animatiable.Text
        className="text-lg my-10 text-white font-bold text-center"
        iterationCount={1}
        animation="slideInUp"
      >
        Waiting for resturant to accept your orders! !
      </Animatiable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </ControlledLayout>
  );
}
