import "./app.css";
import { createCharacterCard } from "./components/Characters";
import Header from "./components/Header";
import { getCharacterById } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  // const rickSanchez = createCharacterCard({
  //   name: "Rick Sanchez",
  //   imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  // });

  // const mortySmith = createCharacterCard({
  //   name: "Morty Smith",
  //   imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // });

  const main = loadCharacters("main");

  async function loadCharacters() {
    const firstCharacter = await getCharacterById(1);
    const secondCharacter = await getCharacterById(2);
    main.append(
      createCharacterCard({
        name: firstCharacter.name,
        imgSrc: firstCharacter.image,
      }),
      createCharacterCard({
        name: secondCharacter.name,
        imgSrc: secondCharacter.image,
      })
    );
  }

  loadCharacters();

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
