import { type JwtPayload, jwtDecode } from 'jwt-decode';

interface ExtendedJwt extends JwtPayload {
    data: {
        username: string;
        email: string;
        _id: string;
    }
};

class AuthService {
    // get User
    getUser() {
        return jwtDecode<ExtendedJwt>(this.getToken());
    }

    // check if the user is logged in by checking if the token is expired
    isTokenExpired(token: string): boolean {
        try {
            const decoded = jwtDecode<JwtPayload>(token);

            if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
                return true;
            }
            return false;
            
        } catch (err) {
            return false;
        }
    }

    // get token from local storage
    getToken(): string {
        const loggedUser = localStorage.getItem('id_token') || '';
        return loggedUser;
    }

    // login user
    login(idToken: string): void {
        // store token in local storage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    // logout user
    logout(): void {
        // remove token from local storage
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();