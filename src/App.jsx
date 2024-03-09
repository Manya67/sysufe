import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Story from "./Story";

function App() {
  return (
    <div className="header">
      <Navbar />
      {/* <Popular /> */}
      <Story />
      <Toaster />
    </div>
  );
}

export default App;
