const authRoutes: string[] = ['/dashboard', '/settings'];

const stationRoutes: string[] = ['/submit-case'];

const adminRoutes: string[] = ['/user-create'];

const isAdmin = localStorage.getItem('isAdmin');

export function isAuhtRoute(url: string) {
  let refinedRoute = getRifinedRoute(url);
  console.log('refined url: ' + refinedRoute);
  let check = analyzeAccess(isAdmin).includes(refinedRoute);

  return check;
}

function analyzeAccess(isAdmin: string): string[] {
  let routeList: string[];
  if (isAdmin == 'true') {
    routeList = authRoutes.concat(adminRoutes);
    return routeList;
  } else {
    routeList = authRoutes.concat(stationRoutes);
    return routeList;
  }
}

function getRifinedRoute(url: string) {
  let route = url.split('?');

  let refined = route[0];
  return refined;
}
