import React, { FC } from "react";
import { Text } from "react-native";

import * as S from "./units";
import * as T from "./types";

export const Button: FC<T.IButton> = ({ children }) => {
  return (
    <S.Button>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
};
