import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductManagerService } from '../../services/product-manager.service';

@Component({
  selector: 'app-restock-page',
  templateUrl: './restock-page.page.html',
  styleUrls: ['./restock-page.page.scss'],
})
export class RestockPagePage implements OnInit {

  public products: Product[] = [];

  public productType = '';

  public restockForm = this.formBuilder.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private productService: ProductManagerService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  ionViewWillEnter() {
    this.products = this.productService.getAllProducts();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.restockForm.dirty ||
      !this.restockForm.valid ||
      !this.restockForm.get('name').value ||
      !this.restockForm.get('quantity').value
    ) {
      this.presentEmptyFieldAlert();
    } else {
      const productIndex = this.products.findIndex((product) => product.name === this.restockForm.get('name').value);
      this.productService.updateProductByName(
        this.restockForm.get('name').value,
        this.products[productIndex].quantity + parseInt(this.restockForm.get('quantity').value, 10),
        this.products[productIndex].price
      );
      this.products[productIndex].quantity += parseInt(this.restockForm.get('quantity').value, 10);
    }
    this.restockForm.reset();
  }

  selectProductName(event) {
    this.restockForm.get('name').setValue(event.target.value);
  }

  onProductClicked(product: Product) {
    this.restockForm.get('name').setValue(product.name);
  }

  async presentEmptyFieldAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Fields cannot be empty!',
      message: 'Fields cannot be empty!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
