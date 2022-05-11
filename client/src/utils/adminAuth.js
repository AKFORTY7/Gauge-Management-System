import decode from 'jwt-decode';

class AdminAuthService {
  adminGetProfile() {
    return decode(this.getToken());
  }

  adminLoggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isAdminTokenExpired(adminToken) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(adminToken);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('admin_id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getAdminToken() {
    return localStorage.getItem('admin_id_token');
  }

  adminLogin(adminIdToken) {
    localStorage.setItem('admin_id_token', adminIdToken);
    window.location.assign('/admin');
  }

  adminLogout() {
    localStorage.removeItem('admin_id_token');
    window.location.reload();
  }
}

export default new AdminAuthService();
