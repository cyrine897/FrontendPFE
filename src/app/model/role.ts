import { ERole } from "./erole";

export class Role {
  public  idRole: number; // Déclarer le type 'number' pour idRole
  public  role: ERole; // Utiliser le type ERole importé

    constructor(idRole: number, role: ERole) {
        this.idRole = idRole;
        this.role = role;
    }
}
