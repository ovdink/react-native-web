import React from "react";
import { View, Text } from "react-native";

// TODO: написать алиасы
import { Logo } from "../../components/core";
import { Button, Input } from "../../components/interaction/";

import { S } from "./units";

export const AuthPage = () => {
  return (
    <>
      <Logo />
      <Input />
      <Button children="Continue with phone" />
      <View style={S.pageWrapper}>
        <Text>Страница аутентификации</Text>
      </View>
    </>
  );
};
