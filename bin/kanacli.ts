#! /usr/bin/env node
import inquirer from "inquirer";
import hiragana from "../kana/hiragana.js";

console.log("\n 🌸 === Welcome to KanaCli === ⛩️");

interface Kana {
  type: string;
  name: {
    hiragana: string;
    romaji: string;
  };
  message: string;
}

const shuffle = (arr: Kana[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const startQuestions = [
  {
    type: "list",
    name: "kanaSelected",
    message: "What kana will you learn?",
    choices: [
      { name: "Hiragana", value: hiragana },
      //   { name: "Katakana", value: katakana },
    ],
    default: "hiragana",
  },
  {
    type: "list",
    name: "kanaNumber",
    message: "How much kana will you learn?",
    choices: [
      { name: "5", value: 5 },
      { name: "10", value: 10 },
      { name: "20", value: 20 },
      { name: "46", value: 46 },
    ],
    default: "5",
  },
];

function ask() {
  inquirer.prompt(startQuestions).then((answers) => {
    const shuffledQuestions = shuffle(answers.kanaSelected).slice(
      0,
      answers.kanaNumber
    );

    // Hiragana/Katakana Quiz
    inquirer.prompt(shuffledQuestions).then((answers) => {
      console.log("\n=== Answers ===");

      console.log(answers);
    });
  });
}
ask();
