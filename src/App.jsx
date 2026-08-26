import CURSOR from "./components/CURSOR";
import ABOUT from "./section/ABOUT";
import CONTACT from "./section/CONTACT";
import FOOTER from "./section/FOOTER";
import HOME from "./section/HOME";
import NAVBAR from "./section/NAVBAR";
import PROJECTS from "./section/PROJECTS";
import SKILLS from "./section/SKILLS";

function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <CURSOR />
      <NAVBAR />
      <HOME />
      <ABOUT />
      <SKILLS />
      <PROJECTS />
      <CONTACT />
      <FOOTER />
    </div>
  );
}

export default App;