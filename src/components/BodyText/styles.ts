import { TextProps } from 'react-native'
import styled, {css} from "styled-components/native";

export type BodyTextStyleVariants = TextProps & {
  size: 'XS' | 'S' | 'M'
  occupyEntireSpace?: boolean
}

export const BodyTextStyle = styled.Text<BodyTextStyleVariants>`
  color: ${(props) => props.size == "M" ? props.theme.COLORS.GRAY_700 : props.theme.COLORS.GRAY_600} ;
  font-family: ${(props) => props.size == "XS" ? props.theme.FONT_FAMILY.BOLD : props.theme.FONT_FAMILY.REGULAR} ;
  font-size: ${(props) => {
    switch (props.size) {
      case 'XS':
        return `${props.theme.FONT_SIZE.XS}px`;
      case 'S':
        return `${props.theme.FONT_SIZE.SM}px`;
      case 'M':
        return `${props.theme.FONT_SIZE.MD}px`;
      default:
        return `${props.theme.FONT_SIZE.MD}px`;
    }
  }};
  
  ${(props) => props.occupyEntireSpace && css`
    flex: 1;
  `}
`