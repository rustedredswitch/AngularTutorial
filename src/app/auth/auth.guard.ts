import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAutenticated();
};

export const authGuardChild: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isRoleAdmin();
};
