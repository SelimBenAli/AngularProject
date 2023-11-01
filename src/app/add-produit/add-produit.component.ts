import { Component } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";
import {Categorie} from "../model/cathegorie.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent {
  newProduit = new Produit();
  categories!: Categorie[];
  newCategorie! : Categorie;
  newIdCat!: number;
  message: string = "";

  constructor(private produitService: ProduitService,
              private router :Router) {
  }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }

  addProduit() {
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  }
}
