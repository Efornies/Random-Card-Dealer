/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  /*   start.addEventListener("click", sacarCartas);
  reset.addEventListener("click", reiniciar); */
};

//Variables

let palo = ["♦", "♥", "♠", "♣"];
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const sacarCartas = () => {
  for (let palo of numero) {
    for (let numero of palo) {
      let num = [palo, n];
      mezcla.push(num);
      mezcla.sort(() => Math.random());
    }
  }
  return mezcla;
};

const reiniciar = () => {
  for (let palo of numero) {
    for (let numero of palo) {
      let num = [palo, numero];
      mezcla.push(num);
      mezcla.sort(() => Math.random());
    }
  }
  return mezcla;
};
