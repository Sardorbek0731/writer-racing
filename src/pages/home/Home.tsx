// CSS
import "./Home.css";

// Components
import Welcome from "../../components/welcome/Welcome";
import Advantages from "../../components/advantages/Advantages";

function Home(): JSX.Element {
  return (
    <main>
      <div className="container">
        <Welcome />
        <Advantages />
      </div>
    </main>
  );
}

export default Home;
