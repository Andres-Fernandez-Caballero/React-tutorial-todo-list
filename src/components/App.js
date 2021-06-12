import './App.css';
import Header from "./Header/Header";
import Todo from "./Todo/Todo";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Home" />
      <Todo/>
      <Footer/>
    </div>
  );
}

export default App;
