import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { createCharacterCard } from "./Characters";

function App() {
  const header = Header();

  const rickSanchez = createCharacterCard({
    name: "Rick Sanchez",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  });

  const mortySmith = createCharacterCard({
    name: "Morty Smith",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  });

  const main = createElement("main", {
    children: [rickSanchez, mortySmith],
  });

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
