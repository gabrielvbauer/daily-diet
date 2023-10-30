import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import theme from "./src/theme";

import { Routes } from "@routes/index";

export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />

      <Routes />
    </ThemeProvider>
  );
}
