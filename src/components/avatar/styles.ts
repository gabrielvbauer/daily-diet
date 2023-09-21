import { View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
  overflow: hidden;
`