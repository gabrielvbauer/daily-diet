import { Text, View } from "react-native";
import styled, { css } from "styled-components";
import { Feather } from "@expo/vector-icons";

export const Container = styled(View)`
  padding: 20px 16px;
  align-items: center;
  border-radius: 8px;
  gap: 2px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  position: relative;
`

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.FONT_SIZE["2XL"] * 1.3}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  font-weight: 700;
`

export const SubTitle = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  font-weight: 400;
`

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))`
  position: absolute;
  top: 8;
  right: 8;
`