import { ScreenHeader } from "@components/ScreenHeader";
import { Container, InputsColumnContainer, InputsContainer } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function NewMeal() {
  return (
    <>
      <ScreenHeader title="Nova Refeição" />
      <Container>
        <InputsContainer>
          <Input label="Nome" />
          <Input label="Descrição" numberOfLines={5} />
          <InputsColumnContainer>
            <Input label="Data" />
            <Input label="Hora" />
          </InputsColumnContainer>
        </InputsContainer>

        <Button title="Cadastrar refeição" />        
      </Container>
    </>
  )
}