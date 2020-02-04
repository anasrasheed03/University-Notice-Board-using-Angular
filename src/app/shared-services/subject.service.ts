import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Subject_Service {

  nadraVerificationSubject = new Subject();
  existingApplicationDataSubject = new Subject();

}
