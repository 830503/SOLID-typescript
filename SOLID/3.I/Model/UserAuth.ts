
export interface UserAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
}