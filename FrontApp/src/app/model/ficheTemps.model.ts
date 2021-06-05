import {ligneFiche} from './ligneFiche.model';

export class ficheTemps {
  id?:number;
  annee?:number;
  username?:String;
  mois?: number;
  statut?:String;
  lfiches :Array<ligneFiche> =[];
}
