import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { CurrentUserService } from '../services/current-user.service';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(CurrentUserService).loadCurrentUser(true).pipe(
    map(user => user?.roles?.includes('ROLE_ADMIN') ? true : router.createUrlTree(user ? ['/app'] : ['/login']))
  );
};
