import decode from 'jwt-decode';

class AuthService {

  getProfile() {
    return decode(this.getToken());

  }

  loggedIn() {
    const token = this.getToken();
 
  

    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isAdmin() {
    const decoded = decode(this.getToken()).data.isAdmin;
    console.log(decoded);
    return decoded;
  }


  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);

    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    const decoded = decode(this.getToken()).data.isAdmin;
    // Decides which route to go depending on user or admin
    decoded ?  window.location.assign('/admin') : window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
