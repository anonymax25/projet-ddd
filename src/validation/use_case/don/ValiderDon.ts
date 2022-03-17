import { Don } from '../../model/don/Don';
import { DonRepository } from '../../model/don/DonRepository';
import { VeterinaireRepository } from '../../model/veterinaire/VeterinaireRepository';

export class ValiderDon {
  constructor(
    private dons: DonRepository,
    private veterinaires: VeterinaireRepository
  ) {}

  public envoiValidationDon(donId: string): void {
    const don = this.dons.findById(donId);
    const veterinare = this.veterinaires.findOneAvailable();
    veterinare.assignDon(don, this.veterinaires);
  }

  public reponseValidationDon(
    donId: string,
    veterinaireId: string,
    response: boolean
  ): Don {
    const veterinaire = this.veterinaires.findById(veterinaireId);
    const don = this.dons.findById(donId);

    don.validate(response, veterinaire);

    veterinaire.unAssignDon(this.veterinaires);

    this.dons.save(don);
    return don;
  }
}
