import MainLayout from "../components/mainlayout";
import { BrowserRouter } from "react-router-dom";



function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </>
  );
}
export default AppRouter;