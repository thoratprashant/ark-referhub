import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthenticateService, private router: Router) { }

    canActivate() {
        if (!localStorage.getItem('adminToken')) {
            this.router.navigateByUrl('/admin/login');
            return false;
        }
        return true;
    }
}
