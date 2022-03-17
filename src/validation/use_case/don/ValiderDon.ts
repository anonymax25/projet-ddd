import { DonRepository } from '../../model/don/DonRepository';
import { VeterinaireRepository } from '../../model/veterinaire/VeterinaireRepository';

export class ValiderDon {
  constructor(
    private dons: DonRepository,
    private veterinaires: VeterinaireRepository
  ) {}

  /**
   *
   * @param donId
   * @returns
   * @description
   * fetch le don
   * fetch un veto
   * send don à valider au veto
   * save retrour de validation du veto
   */
  public envoiValidationDon(donId: string): void {
    const don = this.dons.findById(donId);
    const veterinare = this.veterinaires.findOneAvailable();
    veterinare.assignDon(don, this.veterinaires);
  }

  // public reponseValidationDon(
  //   donId: string,
  //   veterinaireId: string,
  //   response: boolean
  // ): Don {
  //   const don = this.dons.findById(donId);
  //   const veterinaire = this.veterinaires.findById(donId);

  //   return new Don();
  // }
}
