import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
}
)
export class HomeComponent {

    constructor(private router: Router, private authService: AuthService) { }

    loadServers() {
        this.router.navigate(['/servers']);
    }

    loadServer(id: number) {
        this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowedit: 'true', mode: 'off' }, fragment: 'newLoad' });
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }
}
