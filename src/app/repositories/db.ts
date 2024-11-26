import postgres, {PostgresType, Sql} from 'postgres'

const db = postgres({
    host: 'dpg-ct30msrv2p9s73b44a6g-a.frankfurt-postgres.render.com',
    port: 5432,
    database: 'lab2_jclb',
    username: 'lab2_jclb_user',
    password: 'uAjfSoQtHN4JZCaO3cqVOc5dEpruB8zD',
    ssl: "allow"
});

export const getDbConnection = <T extends Record<string, PostgresType<unknown>>>() => {
    return db as Sql<T>;
}
