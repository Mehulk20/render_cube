module.exports = function extractBearerToken(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return null;

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return null;
  }

  return token;
};
