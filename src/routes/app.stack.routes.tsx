import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { NewMeal } from '@screens/NewMeal'

type AppStackParamList = HomeGroupParamList & MealGroupParamList

export type HomeGroupParamList = {
  Home: undefined
  Statistics: undefined
  NewMeal: undefined
}

export type MealGroupParamList = {
  Meal: {
    mealId: string
  }
  EditMeal: undefined // meal props
}

export type HomeGroupNavigation = NativeStackNavigationProp<HomeGroupParamList>
export type MealGroupNavigation = NativeStackNavigationProp<MealGroupParamList>

const Stack = createNativeStackNavigator<AppStackParamList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Statistics' component={Statistics} />
      <Stack.Screen name="NewMeal" component={NewMeal} />

      <Stack.Group>
        <Stack.Screen name="Meal" component={Home} />
        <Stack.Screen name="EditMeal" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  )
}