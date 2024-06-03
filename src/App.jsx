import "./App.css";
import Login from "./assets/components/Login";

function App() {
  function handleLogin(data) {
    console.log("Dati inseriti:", data);
  }
  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
