import type {NextApiRequest, NextApiResponse} from 'next'

import { randomUUID, UUID } from 'crypto';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.table(req.cookies);

    const myCookie = req.cookies.myCookie;

    console.log('myCookie:', myCookie);

    if (!myCookie) {
        const token = randomUUID();
        res.setHeader('Set-Cookie', `myCookie=${token}; HttpOnly; Secure; SameSite=Strict`);
        res.status(200).json({token});
    } else {
        res.status(200).json({token: myCookie});
    }
}
