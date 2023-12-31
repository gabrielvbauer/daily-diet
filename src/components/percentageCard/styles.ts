import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface PercentageCardStyleProps {
  isHealthy: boolean
}

export const Container = styled.TouchableOpacity<PercentageCardStyleProps>`
  padding: 20px 16px;
  align-items: center;
  border-radius: 8px;
  gap: 2px;
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
  position: absolute;
  top: 8px;
  right: 8px;
`