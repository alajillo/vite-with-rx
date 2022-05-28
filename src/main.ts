import { fromEvent, throttleTime, scan } from 'rxjs';

const app = document.getElementById('app') as HTMLDivElement;
const buttonElement = document.createElement('button');
buttonElement.textContent = '버튼';
app.append(buttonElement);

// buttonElement.addEventListener('click', () => {
//   console.log('clicked');
// });

// fromEvent(buttonElement, 'click').subscribe((event) => console.log('clicked'));

fromEvent(buttonElement, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
