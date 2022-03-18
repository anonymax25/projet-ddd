import { Notification } from '../../../notifications/model/Notification';
import { NotificationService } from '../../infrastructure/NotificationService';
import { ResponseValidationDon } from '../../infrastructure/ResponseValidationDon.dto';
import { SendValidationDon } from '../../infrastructure/SendValidationDon.dto';
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

  public envoiValidationDon(dto: SendValidationDon): void {
    const don = this.dons.findById(dto.donId);
    const veterinaire = this.veterinaires.findOneAvailable();

    veterinaire.assignDon(don);

    this.veterinaires.save(veterinaire);

    this.notifications.send<DonNotificationType>(
      new Notification(
        veterinaire.id,
        `You need to check the Don (id: "${don.id}")`,
        'DonPending'
      )
    );
  }

  public reponseValidationDon(dto: ResponseValidationDon): Don {
    const veterinaire = this.veterinaires.findById(dto.veterinaireId);
    const don = this.dons.findById(dto.donId);

    don.validate(dto.response, veterinaire);

    veterinaire.unAssignDon();

    this.veterinaires.save(veterinaire);
    this.dons.save(don);
    this.notifications.send<DonNotificationType>(
      new Notification(
        don.ownerId,
        `Veterinaire validated the Don (id: "${don.id}") with response: ${don.validated}`,
        'DonValidé'
      )
    );
    return don;
  }
}
