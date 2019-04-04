import { Observable } from 'rxjs';

export class AuthService {

    loggedIn: boolean = false;

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    isAuthenticated() {

        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });

        return result;

    }
}
