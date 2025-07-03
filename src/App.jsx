import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";

function App() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer />
      {state == "loading" ? <Loading /> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
}

export default App;
