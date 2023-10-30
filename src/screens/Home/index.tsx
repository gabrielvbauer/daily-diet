import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Header,
  Meals,
  NewMealsContainer,
  NewMealButton,
  NewMealButtonTitle,
  NewMealButtonIcon,
  ScrollContainer,
} from "./styles";

import Logo from "@assets/logo.svg";

import { Avatar } from "@components/avatar";
import { PercentageCard } from "@components/percentageCard";
import { SectionList, Text, View } from "react-native";
import { MealCard } from "@components/mealCard";
import { Title } from "@components/Title";
import { BodyText } from "@components/Body";
import { HomeGroupNavigation } from '@routes/app.stack.routes';

const mealsData = [
  {
    title: "12.08.22",
    data: [
      {
        id: "1",
        name: "X-tudo",
        date: "20:00",
        isInDiet: true,
      },
      {
        id: "2",
        name: "X-tudo",
        date: "20:00",
        isInDiet: true,
      },
      {
        id: "3",
        name: "X-tudo",
        date: "20:00",
        isInDiet: true,
      },
      {
        id: "4",
        name: "X-tudo",
        date: "20:00",
        isInDiet: false,
      },
    ],
  },
  {
    title: "11.08.22",
    data: [
      {
        id: "5",
        name: "X-tudo",
        date: "20:00",
        isInDiet: false,
      },
      {
        id: "6",
        name: "X-tudo",
        date: "20:00",
        isInDiet: false,
      },
      {
        id: "7",
        name: "X-tudo",
        date: "20:00",
        isInDiet: false,
      },
      {
        id: "8",
        name: "X-tudo",
        date: "20:00",
        isInDiet: false,
      },
    ],
  },
];

export function Home() {
  const navigator = useNavigation<HomeGroupNavigation>()

  function handleOpenStatistic() {
    navigator.navigate('Statistics')
  }

  function handleOpenNewMeal() {
    navigator.navigate('NewMeal')
  }

  return (
    <Container>
      <ScrollContainer
        showsVerticalScrollIndicator={false}
      >
        <Header>
          <Logo />
          <Avatar />
        </Header>

        <PercentageCard onPress={handleOpenStatistic} />

        <Meals>
          <NewMealsContainer>
            <BodyText text="Refeições" size="M" style={{marginBottom: 8}} />
            <NewMealButton onPress={handleOpenNewMeal}>
              <NewMealButtonIcon name="plus" size={24} />
              <NewMealButtonTitle>Nova refeição</NewMealButtonTitle>
            </NewMealButton>
          </NewMealsContainer>

          <SectionList
            sections={mealsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MealCard data={item} />}
            ItemSeparatorComponent={() => <View style={{marginTop: 6, marginBottom: 6}} />}
            renderSectionHeader={({ section }) => <Title title={section.title} size="S" />}
            SectionSeparatorComponent={() => <View style={{paddingTop: 16}} />}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{
              marginTop: 32,
              marginBottom: 96
            }}
          />
        </Meals>
      </ScrollContainer>
    </Container>
  );
}
