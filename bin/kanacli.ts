#! /usr/bin/env node
import inquirer from "inquirer";
import hiragana from "../kana/hiragana.js";

console.log("\n 🌸 === Welcome to KanaCli === ⛩️");

interface Kana {
  type: string;
  name: string;
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
    name: "kanaRange",
    message: "How much kana will you learn?",
    choices: [
      { name: "5 Basic Kana", value: { start: 0, end: 46, number: 5 } },
      { name: "10 Basic Kana", value: { start: 0, end: 46, number: 10 } },
      { name: "20 Basic Kana", value: { start: 0, end: 46, number: 20 } },
      { name: "46 Basic Kana (Recommended)", value: { start: 0, end: 46 } },
      { name: "25 Modified Kana", value: { start: 46, end: 71, number: 25 } },
      {
        name: "33 Compounds Kana",
        value: { start: 71, end: 104, number: 33 },
      },
      {
        name: "46 Basic Kana + 25 Modified Kana",
        value: { start: 0, end: 71, number: 71 },
      },
      // { name: "18 Unique Compounds Katakana", value: 0 },
      { name: "104 Full Kana (Hardcore)", value: { start: 0, end: 104 } },
    ],
    default: "5",
  },
];

function ask() {
  inquirer.prompt(startQuestions).then((answers) => {
    const kanaRange = answers.kanaSelected.slice(
      answers.kanaRange.start,
      answers.kanaRange.end
    );
    const shuffledQuestions = shuffle(kanaRange).slice(
      0,
      answers.kanaRange.number
    );

    // Hiragana/Katakana Quiz
    inquirer.prompt(shuffledQuestions).then((answers) => {
      console.log("\n=== Answers ===");
      //  Evaluate
      var evaluate = "";
      var score = 0;
      for (let key in answers) {
        let arr = key.split(",");

        if (arr[1] === answers[key] || arr[2] === answers[key]) {
          score++;
          evaluate = "✅";
        } else {
          evaluate = "❌";
        }
        console.log(
          evaluate,
          "Hiragana:",
          arr[0] + "( " + arr[1],
          arr[2] ? ", " + arr[2] + " )" : ")",
          "- You picked:",
          answers[key]
        );
      }
      // Scoring
      console.log(
        "\n✨ Correct Answers:",
        score + "/" + Object.keys(answers).length
      );
      const percent = (score * 100) / Object.keys(answers).length;
      if (percent > 90) {
        console.log("\n💮 たいへんよくできました (Excellent work!!!)");
      } else if (percent > 70) {
        console.log("\nよくできました (Good job!)");
      } else if (percent > 60) {
        console.log("\nもうすこしがんばりましょう (Needs some effort!)");
      } else {
        console.log("\nがんばりましょう (Needs effort!)");
      }
    });
  });
}

ask();
