import React from "react";
import { CustomText } from "../components";
import { useParams } from "react-router-native";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  return <CustomText>The details in view</CustomText>;
};

export default Details;
