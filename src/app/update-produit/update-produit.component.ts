import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../services/produit.service";
import {Produit} from "../model/produit.model";
import {Categorie} from "../model/cathegorie.model";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: []
})
export class UpdateProduitComponent {
  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService) {
  }

  ngOnInit() {
    this.categories = this.produitService.listeCategories();
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentProduit);
    this.updatedCatId = this.currentProduit.categorie.idCat;

  }

  updateProduit() {
    this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
