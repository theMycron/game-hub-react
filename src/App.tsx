import "./App.css";
import { Drawer } from "@mui/material";
import NavBar from "./components/NavBar/NavBar.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Drawer></Drawer>
      <div className="main"></div>
    </>
  );
}

export default App;
