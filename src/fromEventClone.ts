import { Observable } from 'rxjs';
type EventType = 'click';

function fromEventClone(element: HTMLElement, event: EventType) {
  const observable = new Observable((subcriber) => {
    element.addEventListener(event, (e) => {
      subcriber.next(e);
    });
  });
  return observable;
}

export default fromEventClone;
