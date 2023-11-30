import { TouchableOpacityProps } from 'react-native'

import { Container, Icon } from "./styles";

import { Title } from "@components/Title";
import { BodyText } from "@components/BodyText";

type Props = TouchableOpacityProps & {}

export function PercentageCard({ ...rest }: Props ) {
  const isHealthy = true

  return (
    <Container isHealthy={isHealthy} {...rest}>
      <Icon name="arrow-up-right" isHealthy={isHealthy} />

      <Title title="90,86%" size="G" />
      <BodyText text="das refeições dentro da dieta" size="S" />
    </Container>
  );
}
