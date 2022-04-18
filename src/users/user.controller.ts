import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) { }

    @Get()
    getUsers(): UserDTO[] {
        return this.service.get();
    };

    @Get(':id')
    getUserById(@Param('id') id: string): UserDTO {
        return this.service.getById(id);
    };

    @Post()
    createUser(@Body() user: UserDTO): UserDTO {
        return this.service.create(user);
    };

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: UserDTO): UserDTO {
        return this.service.update(id, user);
    };

    @Delete(':id')
    deleteUser(@Param() id: string) {
        return this.service.delete(id);
    }
}