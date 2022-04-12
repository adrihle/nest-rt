import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDTO } from "./user.dto";

const generateId = () => Math.floor(Math.random() * 1000);

@Controller('users')
export class UsersController {
    users: UserDTO[] = [];

    @Get()
    getUsers(): UserDTO[] {
        return this.users;
    };

    @Get(':id')
    getUserById(@Param('id') id: string): UserDTO {
        return this.users.find(u => u.id === id);
    };

    @Post()
    createUser(@Body() user: UserDTO): UserDTO {
        const newUser: UserDTO = {
            ...user,
            id: String(generateId())
        };
        this.users = [...this.users, newUser];
        return newUser;
    };

    @Put(':id')
    updateUser(@Param(':id') id: string, @Body() user: UserDTO): UserDTO {
        this.users = this.users.filter(u => u.id !== id);
        this.users = [...this.users, this.createUser(user)];
        return user;
    };

    @Delete(':id')
    deleteUser(@Param() id: string) {
        this.users = this.users.filter(u => u.id !== id);
    }
}