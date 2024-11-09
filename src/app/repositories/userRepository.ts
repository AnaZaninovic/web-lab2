import { getDbConnection } from "./db";
import { User } from "../models/user";


export class UserRepository {
    private sql = getDbConnection();

    public GetUserVulnerable = async (username: string, password: string) => {
        console.log('in vulnerable');
        const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
        const user = await this.sql.unsafe<User[]>(query);
        console.log(user);
        return user[0] as User | undefined;
    }

    public GetUserSecure = async (username: string, password: string) => {
        console.log('in secure');
        const user = await this.sql<User[]>`SELECT * FROM users WHERE username = ${username} AND password = ${password}`;
        return user[0] as User | undefined;
    }
}
