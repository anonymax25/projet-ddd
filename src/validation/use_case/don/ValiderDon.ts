import { NotificationService } from '../../../notifications/infrastructure/NotificationService';
import { Notification } from '../../../notifications/model/Notification';
import { Don } from '../../model/don/Don';
import { DonNotificationType } from '../../model/don/DonNotificationType';
import { DonRepository } from '../../model/don/DonRepository';
import { VeterinaireRepository } from '../../model/veterinaire/VeterinaireRepository';

export class ValiderDon {
  constructor(
    private dons: DonRepository,
    private veterinaires: VeterinaireRepository,
    private notifications: NotificationService
  ) {}

  public envoiValidationDon(donId: string): void {
    const don = this.dons.findById(donId);
    const veterinaire = this.veterinaires.findOneAvailable();
    
    veterinaire.assignDon(don, this.veterinaires);

    this.notifications.send<DonNotificationType>(
      new Notification(
        veterinaire.id,
        `You need to check the Don id: "${don.id}"`,
        'DonPending'
      )
    );
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

    this.notifications.send<DonNotificationType>(
      new Notification(
        don.ownerId,
        `Validated the Don id: "${don.id}" with response: ${don.validated}`,
        'DonValidé'
      )
    );
    return don;
  }
}
