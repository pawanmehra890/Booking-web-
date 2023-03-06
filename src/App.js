import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/Lists/List";


import Reserve from "./Pages/Hotel/Reserve";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/onehotel/:id" element={<Hotel />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/Reserve/:id" element={<Reserve/>} />

          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
