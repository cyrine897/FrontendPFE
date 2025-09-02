import { DossierMedical } from "./dossier-medical";
import { ERole } from "./erole";

export class Utilisateur {
  constructor(
    public idUser: number,
    public nom: string,
    public username: string,
    public prenom: string,
    public adresse: string,
    public email: string,
    public password: string,
    public date_naissance: Date,
    public numero: number,
    public roles: ERole[],
    public photo: string,
    public dossierMedical: DossierMedical | undefined,
    public rolee: string,
    public verifyMedecin: boolean,
    public userRoleMed: {
      numerodelicencedeMed: number;
      adresseMed: string;
      qualificationsMed: string;
      nomMed: string;
      pieceIdentiteMed: string;
      copiedelalicencedeMed: string;
      diplomesMed: string;
      dateObtentionDeLaLicenceMed: Date;
      positionMed: string;
      numeroTelephoneMed: number;
      numerodelicencemedicale: number;
    }
  ) {}
}
