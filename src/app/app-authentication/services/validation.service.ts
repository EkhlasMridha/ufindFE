import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(private http: HttpClient) {}

  isUserNameAvailable(username: string) {
    return this.http
      .get(DomainService.domains.apiHost + `identity/username/${username}`)
      .pipe(
        debounceTime(500),
        map((nameExists: boolean) => {
          if (nameExists) {
            return {
              isExists: true,
            };
          }
          return null;
        })
      );
  }

  isEmailExists(email: string) {
    return this.http
      .get(DomainService.domains.apiHost + `identity/email/${email}`)
      .pipe(
        debounceTime(500),
        map((emailExists: boolean) => {
          if (emailExists) {
            return {
              isExists: true,
            };
          }
          return null;
        })
      );
  }
}
