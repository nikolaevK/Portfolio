import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav/Nav";
import "./components/Nav/nav.css";
import "./index.css";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Nav />
    </>
  );
}

export default App;
