import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Product } from '../interfaces/product';
import { History } from '../interfaces/history';
import { HistoryManagerService } from '../services/history-manager.service';
import { ProductManagerService } from '../services/product-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products: Product[];

  public productType = 'Type';

  public productQuantity = 'Quantity';

  public purchaseTotal = 'Total';

  constructor(
    public alertController: AlertController,
    private productService: ProductManagerService,
    private historyService: HistoryManagerService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  onProductClicked(product: Product) {
    this.productType = product.name;
    this.onTotalUpdate();
  }

  onKeypadClicked(key: number) {
    if (this.productQuantity === 'Quantity') {
      this.productQuantity = key.toString();
    } else {
      this.productQuantity += key.toString();
    }
    this.onTotalUpdate();
  }

  onClearKeypadClicked() {
    if (this.productQuantity !== 'Quantity') {
      this.productQuantity = 'Quantity';
    }
    if (this.productType !== 'Type') {
      this.productType = 'Type';
    }
    if (this.purchaseTotal !== 'Total') {
      this.purchaseTotal = 'Total';
    }
  }

  onUndoKeypadClicked() {
    if (this.productQuantity !== 'Quantity' && this.productQuantity.length > 0) {
      this.productQuantity = this.productQuantity.slice(0, -1);
    }
    this.onTotalUpdate();
  }

  onTotalUpdate() {
    if (this.productQuantity && this.productQuantity !== 'Quantity' && this.productType && this.productType !== 'Type') {
      const productTypePriceIndex = this.products.findIndex((product) => product.name === this.productType);
      const productTypePrice = this.products[productTypePriceIndex].price;
      this.purchaseTotal = '$' + (parseInt(this.productQuantity, 10) * productTypePrice).toFixed(2).toString();
    }
  }

  onBuyClick() {
    const productFound = this.products.findIndex((product) => product.name === this.productType);
    if (productFound >= 0 && parseInt(this.productQuantity, 10) > 0 && this.productQuantity !== 'Quantity') {
      if (parseInt(this.productQuantity, 10) <= this.products[productFound].quantity) {
        const newHistoryRecord: History = {
          name: this.products[productFound].name,
          quantity: parseInt(this.productQuantity, 10),
          price: this.products[productFound].price,
          purchaseDate: Date.now()
        };
        this.productService.updateProductByName(
          this.products[productFound].name,
          this.products[productFound].quantity - parseInt(this.productQuantity, 10),
          this.products[productFound].price
        );
        this.products[productFound].quantity -= parseInt(this.productQuantity, 10);
        this.historyService.addNewHistory(newHistoryRecord);
      } else {
        this.presentNoStockAlert('Error', 'No enough stock!', `Not enough stock for ${this.products[productFound].name}.`);
      }
    }
  }

  async presentNoStockAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
