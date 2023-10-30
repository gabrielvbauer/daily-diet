import { BodyTextStyle, BodyTextStyleVariants } from './styles'

interface BodyProps extends BodyTextStyleVariants {
  text: string
}

export function BodyText ({ size, occupyEntireSpace = false, text, ...rest }: BodyProps) {
  return (
    <BodyTextStyle size={size} occupyEntireSpace={occupyEntireSpace} {...rest}>{text}</BodyTextStyle>
  )
}