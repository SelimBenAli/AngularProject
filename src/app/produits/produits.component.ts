import {Component} from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent {
  produits?: Produit[];

  constructor(private produitService: ProduitService,
              private router: Router,
              public authService: AuthService) {
    //this.produits = this.produitService.listeProduit();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
  }
}
