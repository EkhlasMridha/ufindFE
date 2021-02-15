export interface NavigationModel {
    name: string;
    route: string;
    matIcon?: string;
    localIcon?: string;
    isVisible?: boolean;
    role?: 'admin' | 'common' | 'station';
}