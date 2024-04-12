// import {UserService} from "../Service/UserService";
import {Request, Response} from 'express'
import {GET, route} from "awilix-express";
import UserService from "../Service/UserService";

@route('/')
export class UserController {

    // private userService: UserService;

    constructor(private userService: UserService) {

    }

    @GET()
    async getUsers(request: Request, response: Response) {
        response.json(await this.userService.getUsersService());
    }
}