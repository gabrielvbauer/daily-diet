import styled from "styled-components/native";

import Feather from '@expo/vector-icons/Feather'

type ContainerProps = {
  isHealthy: boolean
}

export const Container = styled.View<ContainerProps>`
  padding-top: 60px;
  padding-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${(props) => props.isHealthy ? props.theme.COLORS.GREEN_LIGHT : props.theme.COLORS.RED_LIGHT};
  position: relative;
`

interface IconStyleProps {
  isHealthy: boolean
}

export const Icon = styled(Feather).attrs((props) => ({
  size: 24,
}))<IconStyleProps>`
  color: ${(props) => props.isHealthy ? props.theme.COLORS.GREEN_DARK : props.theme.COLORS.RED_DARK};
`

export const StatsContainer = styled.View`
  align-items: center;
  margin-top: -12px;
`