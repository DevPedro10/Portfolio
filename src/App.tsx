import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Main />
    </ThemeProvider>
  )
}

export default App
