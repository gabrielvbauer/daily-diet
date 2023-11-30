import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  gap: 4px;
`

export const InputComponent = styled.TextInput`
  padding: 14px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`