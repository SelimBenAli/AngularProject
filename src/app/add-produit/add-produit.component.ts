import {Component} from '@angular/core';
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
  newCategorie!: Categorie;
  newIdCat!: number;
  message: string = "";

  constructor(private produitService: ProduitService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
      console.log(cats);
    });
  }

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      });
  }

  /*

    addProduit(){
        this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
        this.produitService.ajouterProduit(this.newProduit)
        .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
        });
        }

  */

}
