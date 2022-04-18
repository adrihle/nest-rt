import { Injectable } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UserEntity } from "./users.entity";

@Injectable()
export class UserMapper {
    dtoToEntity({ id, name }: UserDTO): UserEntity {
        return new UserEntity(id, name);
    };

    entityToDto({ id, name }: UserEntity): UserDTO {
        return new UserDTO(id, name);
    };
}