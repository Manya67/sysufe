import Navbar from "./Navbar";
import Popular from "./Popular";
import Story from "./Story";
import { Provider } from "react-redux";
import store from "./store/Store";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <div className="header">
            <Navbar />
            <Story />
          </div>
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
