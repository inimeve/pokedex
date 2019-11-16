import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor() { }


  getPikachu() {
    return 'Im pika';
  }

}
