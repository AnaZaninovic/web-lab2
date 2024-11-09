import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.table(req.cookies);

    const myCookie = req.cookies.myCookie;

    console.log('myCookie:', myCookie);

    if (!myCookie) {
        res.status(401).json({error: 'Not authorized'});

        return;
    }

    return res.status(200).json({action: "done"});
}
