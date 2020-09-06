import { AppAuthenticationModule } from '../app-authentication/app-authentication.module';

const _authModule = AppAuthenticationModule;

export function getAuthModule() {
  return _authModule;
}
