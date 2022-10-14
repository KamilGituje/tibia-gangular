export class UserAuth {
    userId: string;
    userName: string;
    bearerToken: string;
    isAuthenticated: boolean;
    canAccessChars: boolean;
    canAccessExp: boolean;
    canAccessSell: boolean;
    canAccessBackpack: boolean;

    getValueOfProperty(obj: any, key: string): boolean{
        return obj[key]
    }
}