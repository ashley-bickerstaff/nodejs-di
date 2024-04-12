import {asClass, asFunction, createContainer} from "awilix";
import {PrismaClient} from "@prisma/client";

const container = createContainer({injectionMode: 'CLASSIC'});

container.loadModules([
        ['./src/Service/*.ts', {register: asClass}],
    ],
    {
        formatName: 'camelCase',
    }
);
container.register({
    prisma: asFunction(() => new PrismaClient()).singleton()
});

export default container;