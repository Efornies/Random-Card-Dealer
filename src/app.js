/* eslint-disable */
import "bootstrap";
import "./style.css";

//Variables

let palo = ["♦", "♥", "♠", "♣"];
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const sacarCartas = () => {
  for (let palo of numero) {
    for (let numero of palo) {
      let num = [palo, numero];
      corte.push(num);
      corte.sort(() => Math.random() - 0.5);
    }
  }
  return corte;
};

const aleatorio = () => {
  corte.sort(() => Math.random() - 0.5);
  return corte;
};

const reiniciar = () => {
  for (let palo of numero) {
    for (let numero of palo) {
      let num = [palo, numero];
      mezcla.push(num);
      mezcla.sort(() => Math.random() - 0.5);
    }
  }
  return corte;
};

//PRINT

/* window.onload = function() {
  nuevaCarta.addEventListener("click", sacarCartas);
  reiniciar.addEventListener("click", reiniciar);
}; */
