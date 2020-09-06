import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  handleFormError(
    formGorup: FormGroup,
    errorObservers: object,
    errorTypeGenerator: (type: string, owner: string) => any
  ) {
    Object.keys(formGorup.controls).forEach((field) => {
      errorObservers[field] = formGorup.controls[field].statusChanges.pipe(
        filter((status) => status === 'INVALID'),
        map(() => {
          if (!formGorup.controls[field].errors) {
            return null;
          }
          for (let errName in formGorup.controls[field].errors) {
            let errorType = errorTypeGenerator(errName, field.toString());
            return errorType;
          }
        })
      );
    });
  }
}
