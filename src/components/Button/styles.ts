import { Feather } from '@expo/vector-icons'
import theme from 'src/theme'
import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;  
  `}
`

export const ButtonIcon = styled(Feather).attrs({
  color: theme.COLORS.WHITE
})`
`