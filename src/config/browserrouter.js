import  Home  from "../screens/home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SingleAbout from "../screens/singleabout";
import SingleAbout1 from "../screens/singleabout1";
import Singleabout2 from "../screens/singleabout2";
import Singleabout3 from "../screens/singleabout3";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav className="text-center py-5 fs-5">
        <button className="mx-3 bg-dark"><Link className="App text-white" to="/">Home</Link></button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="singleabout/:id" element={<SingleAbout />} />
          <Route path="singleabout1/:id" element={<SingleAbout1 />} />
          <Route path="singleabout2/:id" element={<Singleabout2 />} />
          <Route path="singleabout3/:id" element={<Singleabout3 />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}