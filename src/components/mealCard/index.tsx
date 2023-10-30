import { BodyText } from "@components/Body";
import {
  Container,
  DietIndicator,
  Separator,
} from "./styles";

interface MealCardProps {
  data: MealCard;
}

interface MealCard {
  name: string;
  date: string;
  isInDiet: boolean;
}

export function MealCard({ data }: MealCardProps) {
  const { name, date, isInDiet } = data;

  return (
    <Container>
      <BodyText size="XS" text={date} />
      <Separator />
      <BodyText size="M" text={name} occupyEntireSpace/>
      <DietIndicator isInDiet={isInDiet} />
    </Container>
  );
}
