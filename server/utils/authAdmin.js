const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '1h';

module.exports = {
  authAdminMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.admin = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  adminSignToken: function ({ adminEmail, adminName, _id }) {
    const payload = { adminEmail,adminName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
