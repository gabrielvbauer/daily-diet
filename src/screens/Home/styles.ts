import { View } from 'react-native'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 36px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`