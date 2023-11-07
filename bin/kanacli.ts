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
