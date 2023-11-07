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
