import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ]
})
export class ProductsComponent implements OnInit {
  public products: any;
  public editingProduct: any = null;
  public keyword: string = '';
  public filteredProducts: any[] = [];
  constructor() {}

  ngOnInit() {
    this.products = [
      {"id": 1, "name": "Computer", "price": 4300},
      {"id": 2, "name": "Printer", "price": 3225},
      {"id": 3, "name": "SmartPhone", "price": 2100},
      {"id": 4, "name": "Keyboard", "price": 800},
    ];
    this.filteredProducts=[...this.products];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
    this.filteredProducts=[...this.products];
  }

  editProduct(product: any) {
    this.editingProduct = { ...product }; // Clone the product to avoid live changes
  }

  saveProduct() {
    const index = this.products.findIndex((p:any )=> p.id === this.editingProduct.id);
    if (index !== -1) {
      this.products[index] = { ...this.editingProduct }; // Apply changes
    }
    this.editingProduct = null; // Exit editing mode
    this.filteredProducts=[...this.products];
  }

  cancelEdit() {
    this.editingProduct = null; // Discard changes
  }

  // Search function
  searchTerm: any;
  search(){
    this.filteredProducts = this.products.filter((p:any)=> p.name.includes(this.keyword));
  }
}
