import { Title } from "@components/Title";
import { TextInputProps } from "react-native";
import { Container, InputComponent } from "./styles";

type InputProps = TextInputProps & {
  label?: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      {label && (
        <Title title={label} size="XS" />
      )}
      <InputComponent 
        value="teste"
        {...rest}
      />
    </Container>
  )
}