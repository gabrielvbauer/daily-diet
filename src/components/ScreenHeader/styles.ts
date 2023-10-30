import styled from "styled-components/native";

import Feather from '@expo/vector-icons/Feather'

export const Container = styled.View`
  padding-top: 56px;
  padding-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_300};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled(Feather).attrs((props) => ({
  size: 24,
}))`
  color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const EmptySpacer = styled.View`
  width: 24px;
`