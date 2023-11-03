import "./App.css";
import Header from "./components/header/Header";
import SearchComponent from "./components/header/SearchComponent";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <SearchComponent />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
