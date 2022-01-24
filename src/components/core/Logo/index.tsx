import React from "react";
import { ImageBackground, View, Image } from "react-native";

import LogoSVG from "./images/general-logo.svg";
import { S } from "./units";

export const Logo = () => {
  return (
    <>
      <View style={S.imageContainer}>
        <Image source={LogoSVG} style={S.logoImage} />
      </View>
    </>
  );
};
