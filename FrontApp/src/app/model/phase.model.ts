import {Projet} from './projet.model';

export class Phase{
  constructor() {}
  id?: number;
  titre?: string;
  code?:string;
  desc?:string;
  dateDebut?:Date;
  dateFin?:Date;
  nbrJour?:number;
  projet?:Projet;
  
}
