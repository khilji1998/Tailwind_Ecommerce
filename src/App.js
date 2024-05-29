import { GlobalProvider } from "./context/globalState";
import Routes from "./routing/routes";
function App() {
  return (
    <>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </>
  );
}

export default App;
