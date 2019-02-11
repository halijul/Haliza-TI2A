import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor() { }

  getHaliza(){
    return [
      {id:0, hobby:"Berenang", ket:"Tiap Minggu 3x"},
      {id:1, hobby:"Bermain", ket:"tiap hari main"},
      {id:2, hobby:"Makan", ket:"karena hidup butuh makan"}
    ]
  }
}
