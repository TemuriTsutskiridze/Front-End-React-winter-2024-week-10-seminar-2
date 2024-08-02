import "./App.css";
import ThemeProvider from "./contexts/ThemeContext";
import Container from "./components/Container";

export default function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}
