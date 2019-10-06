const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio mascote da CollabCode");
const $memoryCardFront = createMemoryCard("img/icon-c.png", "Ícone de um livro da linguagem C++", "-front");


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);


$root.insertAdjacentElement("beforeend", $cardsWrapper);

