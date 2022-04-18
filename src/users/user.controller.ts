import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) { }

    @Get()
    async getUsers() {
        return this.service.get();
    };

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.service.getById(id);
    };

    @Post()
    async createUser(@Body() user: UserDTO) {
        return this.service.create(user);
    };

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: UserDTO) {
        return this.service.update(id, user);
    };

    @Delete(':id')
    async deleteUser(@Param() id: string) {
        return this.service.delete(id);
    }
}