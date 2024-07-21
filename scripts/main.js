import { pool } from "./services/pool";

const mainActionButton = document.querySelector('.navbar8-action12 thq-button-filled thq-button-animated');
const secondaryActionButton = document.querySelector('.navbar8-action12 thq-button-filled thq-button-animated');

mainActionButton.onclick = function connectToBackend() {
    secondaryActionButton.style.visibility = 'hidden';
}


