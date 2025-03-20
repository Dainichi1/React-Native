import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { Statusbar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <Statusbar styles="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({});
