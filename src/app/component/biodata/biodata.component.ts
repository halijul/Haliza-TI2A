import { BiodataService } from './../../service/biodata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {

  Title: String;
  Tanggal: any;
  Hobbies: any[];
  Nama: String;
  Alamat: String;

  constructor(private serv:BiodataService) { }

  ngOnInit() {
    this.Title = "Biodata";
    this.Tanggal = Date.now();
    this.Nama = "Haliza Hayyu Firdausy";
    this.Alamat = "Magetan";
    this.Hobbies = this.serv.getHaliza();
  }

}
