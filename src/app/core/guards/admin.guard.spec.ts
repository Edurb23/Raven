import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, provideRouter } from '@angular/router';
import { Observable, firstValueFrom, of } from 'rxjs';
import { adminGuard } from './admin.guard';
import { CurrentUserService } from '../services/current-user.service';

describe('Admin route access', () => {
  for (const [roles, destination] of [[['ROLE_ADMIN'], true], [['ROLE_USER'], '/app'], [['ROLE_ADM'], '/app'], [null, '/login']] as const) {
    it(`handles ${JSON.stringify(roles)}`, async () => {
      TestBed.configureTestingModule({ providers: [provideRouter([]), {
        provide: CurrentUserService, useValue: { loadCurrentUser: () => of(roles ? { roles } : null) }
      }] });
      const result = await firstValueFrom(TestBed.runInInjectionContext(() => adminGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)) as Observable<true | ReturnType<Router['createUrlTree']>>);
      expect(result === true ? true : TestBed.inject(Router).serializeUrl(result)).toBe(destination);
    });
  }
});
