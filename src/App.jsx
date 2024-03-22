import "./App.css";
import Header from "./components/shared/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto bg-slate-400">
        <Home></Home>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
