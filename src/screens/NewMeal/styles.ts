import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
