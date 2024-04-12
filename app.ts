import express, {Request, Response} from 'express'
import container from "./config/container";
import {loadControllers, scopePerRequest} from "awilix-express";

const app = express();


app.use(scopePerRequest(container));
app.use(loadControllers(
        'src/Controller/*.ts',
        {
            cwd: __dirname,
        }
    )
);

// app.get('/', async (req: Request, res: Response) => {
//
//     const prisma = new PrismaClient();
//     const userService = new UserService(prisma);
//     res.json(await userService.getUsers());
// });
// const userController = new UserController(new UserService(new PrismaClient()));
// app.get('/', userController.getUsers.bind(userController));

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})