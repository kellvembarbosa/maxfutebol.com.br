import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        return res.status(200).json({
            error: false
        });
    } catch (error) {
        res.send({ error: true, message: error.message })
    }
}