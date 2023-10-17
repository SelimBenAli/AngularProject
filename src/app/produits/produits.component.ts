import {Component} from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent {
  produits?: Produit[];

  constructor(private produitService: ProduitService) {

  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduit();
  }

  supprimerProduit(p: Produit) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p);
  }
}
