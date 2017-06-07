import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Purwadhika!';
  info = 'Promosi hanya untuk hari ini, silahkan berbelanja sekarang';

  buyMe(){
    alert('Anda akan membeli barang');
    console.log('Nama Barang: Sepatu')
  }
}
