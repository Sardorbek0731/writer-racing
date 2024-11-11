// CSS
import "./Home.css";

// Components
import Welcome from "../../components/welcome/Welcome";
import Advantages from "../../components/advantages/Advantages";

function Home(): JSX.Element {
  return (
    <main>
      <Welcome />
      <Advantages />
    </main>
  );
}

export default Home;
