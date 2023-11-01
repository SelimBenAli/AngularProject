import {Injectable} from '@angular/core';
import {Produit} from "../model/produit.model";
import {Categorie} from "../model/cathegorie.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[];
  categories!: Categorie[];

  constructor() {

    this.categories = [{idCat: 1, nomCat: "PC"},
      {idCat: 2, nomCat: "Imprimante"}];

    this.produits = [
      {
        idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011"), categorie: {idCat: 1, nomCat: "PC"}
      },
      {
        idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"), categorie: {idCat: 2, nomCat: "Imprimante"}
      },
      {
        idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), categorie: {idCat: 1, nomCat: "PC"}
      }
    ];
  }

  listeProduit(): Produit[] {
    return this.produits;
  }

  ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }

  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }

  consulterProduit(id: number): Produit {
    return this.produits.find(p => p.idProduit == id)!;
  }

  updateProduit(p: Produit) {
// console.log(p);
    this.supprimerProduit(p);
    this.ajouterProduit(p);
  }

  listeCategories():Categorie[] {
    return this.categories;
  }
  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
  }


}
