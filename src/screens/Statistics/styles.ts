import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: -10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const CardsContainer = styled.View`
  margin-top: 24px;
  gap: 12px;
`

export const CardsColumnContainer = styled.View`
  gap: 12px;
  flex-direction: row;
`

type CardProps = {
  backgroundColor?: 'green' | 'red'
}

export const Card = styled.View<CardProps>`
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'green':
        return props.theme.COLORS.GREEN_LIGHT
      case 'red':
        return props.theme.COLORS.RED_LIGHT
      default:
          return props.theme.COLORS.GRAY_200
    }
  }};
`