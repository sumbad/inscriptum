import { ConferenceService } from './conference.service';
import conferenceTemplate from './conference.template';
import { ConferenceComponent } from './conference.component';


const conferenceService = new ConferenceService();


export { conferenceService, conferenceTemplate };

export default ConferenceComponent;