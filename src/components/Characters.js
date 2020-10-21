import { createElement } from "./utils/elements";

export const createCharacterCard = ({ name, imgSrc }) => {
  const characterName = createElement("div", {
    innerText: name,
  });

  const characterImg = createElement("img", {
    src: imgSrc,
    alt: `Picture of ${name}`,
  });

  const containerCharacters = createElement("div", {
    className: "container__characters",
    children: [characterName, characterImg],
  });
  return containerCharacters;
};
