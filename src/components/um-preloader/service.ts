import { Subject } from 'rxjs';


export class PreloaderService {
  static isAppLoading = new Subject();
}