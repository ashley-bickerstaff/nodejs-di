import {PrismaClient, User} from "@prisma/client";

export default class UserService {

    constructor(private prisma: PrismaClient) {
    }
    public async getUsersService(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
}