import { fromEvent } from "rxjs";


const buttonElement = document.getElementById('button') as HTMLButtonElement;

fromEvent(buttonElement,'click').subscribe(()=> console.log('clicked'))