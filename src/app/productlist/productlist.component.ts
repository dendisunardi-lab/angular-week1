import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: [{name: string, price: string, image: string, stock: number}] = 
  [
    {
      name: 'Shoe',
      price: 'Rp. 200.000',
      image: 'https://rukminim1.flixcart.com/image/312/312/shoe/h/f/d/tan-drr-9184-sukun-7-original-imaees4junyhzbcu.jpeg?q=70',
      stock: 1
    }, 
    {
      name: 'Watches', 
      price: 'Rp. 300.000', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j0wqj680/watch/x/9/g/tw002e101-timex-original-imaeshhzctcaaesy.jpeg?q=70',
      stock: 2
    }, 
    {
      name: 'Handphone',
      price: 'Rp. 600.000',
      image: 'https://rukminim1.flixcart.com/image/312/312/j2c6du80/mobile/f/2/j/apple-iphone-6-a1586-original-imaetnf2h6gck78p.jpeg?q=70',
      stock: 0
    },
    {
      name: 'T-shirt', 
      price: 'Rp. 100.000', 
      image: 'https://rukminim1.flixcart.com/image/312/312/t-shirt/z/g/5/l-bs90-leana-original-imaertrgugdmtfjh.jpeg?q=70',
      stock: 2
    }
    ]
  // products = ['Shoe', 'Watches', 'Handphone', 'T-shirt'];

  constructor() { }

  ngOnInit() {
  }

}
