import React from "react";
import { CustomText } from "../components";
import { useParams } from "react-router-native";

const Details = () => {
  const { id } = useParams();

  return <CustomText>The details in view</CustomText>;
};

export default Details;
