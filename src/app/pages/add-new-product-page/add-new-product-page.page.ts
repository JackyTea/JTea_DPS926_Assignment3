import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductManagerService } from 'src/app/services/product-manager.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-add-new-product-page',
  templateUrl: './add-new-product-page.page.html',
  styleUrls: ['./add-new-product-page.page.scss'],
})
export class AddNewProductPagePage implements OnInit {

  public addProductForm = this.formBuilder.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor(
    private productService: ProductManagerService,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {

  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.addProductForm.dirty ||
      !this.addProductForm.valid ||
      !this.addProductForm.get('name').value ||
      !this.addProductForm.get('quantity').value ||
      !this.addProductForm.get('price').value
    ) {
      this.presentEmptyFieldAlert();
    } else {
      const newProduct: Product = {
        name: this.addProductForm.get('name').value,
        quantity: this.addProductForm.get('quantity').value,
        price: this.addProductForm.get('price').value
      };
      this.productService.addNewProduct(newProduct);
      this.presentSuccessAlert(
        `Successfully added ${this.addProductForm.get('name').value}`,
        `Successfully added ${this.addProductForm.get('name').value}`
      );
    }
    this.addProductForm.reset();
  }

  onCancel() {
    this.addProductForm.reset();
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

  async presentSuccessAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
