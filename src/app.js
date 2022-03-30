/* eslint-disable */
import "bootstrap";
import "./style.css";

//Variables

let suits = ["♦", "♥", "♠", "♣"];
let pokernumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let corte = [];
let mezcla = [];

//Imprimir en carta

const CardPalos = document.querySelectorAll(".palos");
const CardNumber = document.querySelector("#numero");

//Fórmulas

const getRandomNumber = () => {
  CardNumber.innerHTML =
    pokernumbers[Math.floor(Math.random() * pokernumbers.length)];
};

const getRandomPalo = () => {
  const CardPalo = suits[Math.floor(Math.random() * suits.length)];
  for (let palo = 0; palo < CardPalo.length; palo++) {
    CardPalos[palo].innerHTML = CardPalo;
  }
};

//Llamámos a la función:

//Botones

const miboton = document.querySelector("#start");
miboton.addEventListener("click", () => {
  getRandomNumber();
  getRandomPalo();
});
window.onload = () => {};
