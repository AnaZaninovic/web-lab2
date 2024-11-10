import type {NextApiRequest, NextApiResponse} from 'next'

import { randomUUID, UUID } from 'crypto';
import { PAGE_1, PAGE_2 } from '@/config';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method == "OPTIONS"){
        res.setHeader('Access-Control-Allow-Origin', PAGE_1);
        res.setHeader('Access-Control-Allow-Origin', PAGE_2);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, CSRF-Token');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        res.status(200).end();
        return 
    }

    console.table(req.cookies);

    const myCookie = req.cookies.myCookie;

    console.log('myCookie:', myCookie);

    if (!myCookie) {
        const token = randomUUID();
        res.setHeader('Set-Cookie', `myCookie=${token}; HttpOnly; Secure; SameSite=none`);
        res.status(200).json({token});
    } else {
        res.status(200).json({token: myCookie});
    }
}
