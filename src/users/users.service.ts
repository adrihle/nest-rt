import { Injectable } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UserEntity } from "./users.entity";
import { UserMapper } from "./users.mapper";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(
        private repository: UsersRepository,
        private mapper: UserMapper
    ) { }

    public async get(): Promise<UserDTO[]> {
        const users: UserEntity[] = await this.repository.getAll();
        return users.map(user => this.mapper.entityToDto(user));
    };

    public async getById(id: string): Promise<UserDTO> {
        const user: UserEntity = await this.repository.getById(id);
        return this.mapper.entityToDto(user);
    };

    public async create(user: UserDTO): Promise<UserDTO> {
        const newUser: UserEntity = await this.repository.create(user);
        return this.mapper.entityToDto(newUser);
    };

    public async update(id: string, user: UserDTO): Promise<UserDTO> {
        const updatedUser = await this.repository.update(id, user);
        return this.mapper.entityToDto(updatedUser);
    };

    public async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}