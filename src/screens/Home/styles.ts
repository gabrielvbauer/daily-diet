import { Text, TouchableOpacity, View } from 'react-native'
import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import theme from '../../theme'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const ScrollContainer = styled.ScrollView`
  padding: 0 24px;
`

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 32px;
`

export const Meals = styled(View)`
  margin-top: 40px;
  flex: 1;
`

export const NewMealsContainer = styled(View)`
  
`

export const MealsTitle = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
    color: ${theme.COLORS.GRAY_700}
  `};
  margin-bottom: 8px;
`

export const NewMealButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const NewMealButtonTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.FONT_SIZE.SM * 1.3}px;  
  `}
`

export const NewMealButtonIcon = styled(Feather).attrs({
  color: theme.COLORS.WHITE
})`
`