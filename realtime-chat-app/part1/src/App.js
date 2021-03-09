import "./App.css";
import Mensaje from "./Mensaje.js";

const Description = () => {
  return <h2> Jorge Villavicencio</h2>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' tittle='Estamos trabajando'/>
      <Mensaje color='green' tittle='En un curso'/>
      <Mensaje color='blue' tittle='De REACT'/>
      <Description />
    </div>
  );
};

export default App;
