import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminActionsService } from './admin-actions.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private action: AdminActionsService, private router: Router) { }

    canActivate() {
        if (!localStorage.getItem('adminToken')) {
            this.router.navigateByUrl('/admin/login');
            return false;
        }
        return true;
    }
}
