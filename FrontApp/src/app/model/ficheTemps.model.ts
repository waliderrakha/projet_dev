import {ligneFiche} from './ligneFiche.model';

export class ficheTemps {
  id?:number;
  annee?:number;
  username?:string;
  mois?: number;
  statut?:string;
  lfiche :Array<ligneFiche> =[];
  tothr?:number;

}
