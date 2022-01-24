import styled from "@emotion/native";

// TODO: Button не стилизуется - выяснить
export const Button = styled.View<any>`
  background-color: #007aff;
  border-radius: 16px;

  /* TODO: убрать фикс ширину */
  width: 300px;
  height: 50px;
  padding-top: 15px;

  text-align: center;
  cursor: pointer;
`;

export const Text = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;

  color: #ffffff;
`;
