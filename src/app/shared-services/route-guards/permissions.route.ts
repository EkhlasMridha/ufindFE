const authRoutes: string[] = ['/dashboard'];

const NonAuthRoutes: string[] = ['/signin', '/signout', '/reset-password'];

export function isAuhtRoute(url: string) {
  let check = authRoutes.includes(url);

  return check;
}

export function isFreeRoute(url: string) {
  let check = NonAuthRoutes.includes(url);
  return check;
}
