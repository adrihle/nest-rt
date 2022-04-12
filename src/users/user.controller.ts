import { Controller, Get } from "@nestjs/common";
import { UserDTO } from "./user.dto";

@Controller('users')
export class UsersController {
    users: UserDTO[] = [];

    @Get()
    getAllUsers(): UserDTO[] {
        return this.users;
    }
}