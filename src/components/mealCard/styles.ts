import { Text, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`

export const Separator = styled(View)`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-left: 12px;
  margin-right: 12px;
`

type DietIndicatorProps = {
  isInDiet: boolean
}

export const DietIndicator = styled.View<DietIndicatorProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${(props) => props.isInDiet ? props.theme.COLORS.GREEN : props.theme.COLORS.RED};
`