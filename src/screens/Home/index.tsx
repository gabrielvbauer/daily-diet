import { Avatar } from "@components/avatar";

import { Container, Header } from "./styles";

import Logo from "@assets/logo.svg";
import { PercentageCard } from "@components/percentageCard";

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <Avatar />
      </Header>

      <PercentageCard />
    </Container>
  );
}
