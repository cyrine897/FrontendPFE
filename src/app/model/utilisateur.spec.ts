import { Utilisateur } from './utilisateur';
import { ERole } from './erole';
import { DossierMedical } from './dossier-medical';

describe('Utilisateur', () => {
  it('should create an instance', () => {
    const utilisateur = new Utilisateur(
      1, // idUser
      'Doe', // nom
      'johndoe', // username
      'John', // prenom
      '123 rue exemple', // adresse
      'john@example.com', // email
      'password123', // password
      new Date('1990-01-01'), // date_naissance
      1234567890, // numero
      [ERole.Patient], // roles (exemple)
      'photo.jpg', // photo
      undefined, // dossierMedical (optionnel)
      'ROLE_USER', // rolee
      true, // verifyMedecin
      { // userRoleMed
        numerodelicencedeMed: 123456,
        adresseMed: 'adresse med',
        qualificationsMed: 'qualification',
        nomMed: 'Dr. John',
        pieceIdentiteMed: 'CNI12345',
        copiedelalicencedeMed: 'copie.pdf',
        diplomesMed: 'doctorat médecine',
        dateObtentionDeLaLicenceMed: new Date('2015-06-01'),
        positionMed: 'Cardiologue',
        numeroTelephoneMed: 987654321,
        numerodelicencemedicale: 78910
      }
    );

    expect(utilisateur).toBeTruthy();
  });
});
