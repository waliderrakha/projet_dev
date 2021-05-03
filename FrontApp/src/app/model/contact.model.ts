import {Client} from './client.model';

export class Contact{
  constructor() {}
  id?: number;
  nom?: string;
  prenom?:string;
  tel_fixe?:string;
  tel_mobile?:string;
  email?:string;
  dep?:string;
  client?:string;

  setClient(value: string) {
  this.client = value;
}
  setNom(value: string) {
    this.nom = value;
  }


}


