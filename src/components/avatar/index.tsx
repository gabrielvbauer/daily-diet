import { Image } from "react-native";
import { Container } from "./styles";

export function Avatar() {
  return (
    <Container>
      <Image
        width={40}
        height={40}
        source={{ uri: "https://github.com/gabrielvbauer.png" }}
      />
    </Container>
  );
}
