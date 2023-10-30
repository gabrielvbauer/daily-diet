import { TitleStyle, TitleStyleVariants } from './styles'

interface TitleProps extends TitleStyleVariants {
  title: string
}

export function Title ({ size, title, ...rest }: TitleProps) {
  return (
    <TitleStyle size={size} {...rest}>{title}</TitleStyle>
  )
}