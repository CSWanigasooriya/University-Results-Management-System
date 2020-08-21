export interface User {
    roles: Roles;
    displayName?: string;
    email?: string;
    photoURL?: string;
    uid?: string;
}

export interface Roles {
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
}
