import {Categorie} from "./cathegorie.model";

export class Produit {
  idProduit? : number;
  nomProduit? : string;
  prixProduit? : number;
  dateCreation? : Date ;
  categorie!: Categorie;
}
