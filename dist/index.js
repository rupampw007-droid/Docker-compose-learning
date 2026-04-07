import express, { json } from 'express';
import { prismaClient } from './lib/prisma.js';
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
    try {
        const data = await prismaClient.user.findMany({});
        return res.json({
            data
        });
    }
    catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        });
    }
});
app.post('/', async (req, res) => {
    const { username, password, email } = req.body;
    console.log(username);
    try {
        const data = await prismaClient.user.create({
            data: {
                username,
                password
            }
        });
        return res.status(200).json({
            data
        });
    }
    catch (e) {
        res.json({
            message: e.message
        });
    }
    res.json({
        "message": "post endpoint"
    });
});
app.listen(3000, () => console.log("App is listening to the port 3000"));
//# sourceMappingURL=index.js.map