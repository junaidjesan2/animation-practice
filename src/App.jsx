import Header from "./components/shared/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="w-10/12 mx-auto">
        <Home></Home>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
