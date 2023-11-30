import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonIcon, ButtonTitle } from "./styles";
import { Feather } from '@expo/vector-icons'

type ButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof Feather.glyphMap
  iconSize?: number
  title?: string
}

export function Button({ icon, iconSize = 24, title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {icon && (
        <ButtonIcon name={icon} size={iconSize} />
      )}
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  )
}