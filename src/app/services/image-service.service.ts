import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {}


  public uploadImage(image: File): Observable<File> {
    const formData = new FormData();

    formData.append('image', image);

    return  new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(image);
        subscriber.complete();
      }, 1);
    });
  }
}
