import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UserDTO } from "./user.dto";
import { UserEntity } from "./users.entity";
import { UserMapper } from "./users.mapper";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
        private mapper: UserMapper
    ) { };

    async getAll(): Promise<UserEntity[]> {
        return this.repository.find();
    };

    async getById(id: string): Promise<UserEntity> {
        return this.repository.findOneBy({ id });
    };

    async create(user: UserDTO): Promise<UserEntity> {
        const newUser = this.mapper.dtoToEntity(user);
        return this.repository.save(newUser);
    };

    async update(id: string, user: UserDTO): Promise<UserEntity> {
        const updatedUser = this.mapper.dtoToEntity({
            ...user,
            id
        });
        await this.repository.update(id, updatedUser);
        return this.repository.findOneBy({ id });
    };

    async delete(id: string): Promise<DeleteResult> {
        return this.repository.delete(id);
    };
}