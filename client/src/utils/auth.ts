import { type JwtPayload, jwtDecode } from 'jwt-decode';

interface ExtendedJwt extends JwtPayload {
    data: {
        username: string;
        email: string;
        _id: string;
    }
};

class AuthService {
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


}

export default new AuthService();