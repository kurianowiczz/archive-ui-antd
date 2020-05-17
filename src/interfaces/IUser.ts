interface IUser {
    id: string;
    email: string;
    name: string;
    password?: string;
    role: string;
    banned: boolean;
}

export default IUser;
