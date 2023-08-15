import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Nav from "./components/Nav";
import { Box } from "@mui/material";

function App() {
  return (
    < >
    <Box style={{"backgroundColor":"#272829"}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Box>
    </>
  );
}

export default App;
