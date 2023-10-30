import { TextProps } from "react-native";
import styled from "styled-components/native";

export type TitleStyleVariants = TextProps & {
  size: 'XS' | 'S' | 'M' | 'G'
}

export const TitleStyle = styled.Text<TitleStyleVariants>`
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${(props) => {
    switch (props.size) {
      case 'XS':
        return `${props.theme.FONT_SIZE.SM}px`;
      case 'S':
        return `${props.theme.FONT_SIZE.LG}px`;
      case 'M':
        return `${props.theme.FONT_SIZE.XL}px`;
      case 'G':
        return `${props.theme.FONT_SIZE['2XL']}px`;
      default:
        return `${props.theme.FONT_SIZE.XL}px`;
    }
  }};
`