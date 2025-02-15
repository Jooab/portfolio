import "./App.css";
import { Home } from "./components/home";
import { InViewProvider } from "./contexts/inViewContext";

function App() {
  return (
    <>
      <InViewProvider>
        <Home />
      </InViewProvider>
    </>
  );
}

export default App;
