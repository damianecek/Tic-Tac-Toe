const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;

let spaces = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  const boxes = Array.from(document.getElementsByClassName("box"));

  boxes.forEach((box) =>
    box.addEventListener("click", (event) => boxClicked(event, box))
  );
};

function boxClicked(event, box) {
  const id = box.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    box.innerText = currentPlayer;
  }

  if (currentPlayer === X_TEXT) {
    currentPlayer = O_TEXT;
  } else {
    currentPlayer = X_TEXT;
  }

  const winner = playerHasWon();
  if (winner !== false) {
    document.getElementById("text").innerText = `${winner} has won!`;
  }
}

function playerHasWon() {
  for (const condition of winningCombinations) {
    const [a, b, c] = condition;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return spaces[a];
    }
  }
  return false;
}

function restart() {
  spaces.fill(null);
  Array.from(document.getElementsByClassName("box")).forEach((box) => {
    box.innerText = " ";
  });
  currentPlayer = X_TEXT;
  document.getElementById("text").innerText = "TIC|TAC|TOE";
  console.log(spaces);
}

startGame();
