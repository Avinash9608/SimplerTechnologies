import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import UserCard from "./components/UserCard";
// import "../src/assets/css/App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>User Cards</h2>
      <UserCard name="Avinash Kumar" email="avinash@example.com" />
      <UserCard name="John Doe" email="john@example.com" />
    </div>
  );
}

export default App;
