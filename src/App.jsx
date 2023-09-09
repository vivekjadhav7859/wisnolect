import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";


function App() {
  return (
    <>
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* </Switch> */}
    </>
  );
}

export default App;
