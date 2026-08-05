import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./components/sections/About";
import MainLayout from "./MainLayout/MainLayout";
// import Test from "./Test";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
