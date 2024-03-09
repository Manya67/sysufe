import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Story from "./Story";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="header">
          <Navbar />
          {/* <Popular /> */}
          <Story />
          <Toaster />
        </div>
      </Provider>
    </>
  );
}

export default App;
