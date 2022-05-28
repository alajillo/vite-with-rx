// import { fromEvent, throttleTime, scan, Observable, Subscriber } from 'rxjs';
import fromEventClone from './fromEventClone';

const app = document.getElementById('app') as HTMLDivElement;
const buttonElement = document.createElement('button');
buttonElement.textContent = '버튼';
app.append(buttonElement);

// buttonElement.addEventListener('click', () => {
//   console.log('clicked');
// });
fromEventClone(buttonElement, 'click').subscribe(() => console.log('clicked'));

// fromEvent(buttonElement, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`Clicked ${count} times`));

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.next(4);
//   subscriber.complete();
//   subscriber.next(5);

//   return function unscribe() {
//     console.log('구독 종료');
//   };
// });

// const observer = {
//   next: (x: unknown) => console.log('next', x),
//   error: (err: unknown) => console.log('err', err),
//   complete: () => console.log('done'),
// };

// observable.subscribe(observer);
