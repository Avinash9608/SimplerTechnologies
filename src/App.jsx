import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import UserCard from "./components/UserCard";

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
