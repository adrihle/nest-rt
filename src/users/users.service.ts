import { Injectable } from "@nestjs/common";
import { UserDTO } from "./user.dto";

@Injectable()
export class UsersService {
    private users: UserDTO[] = [];

    private generateId = () => Math.floor(Math.random() * 1000);

    public get(): UserDTO[] {
        return this.users;
    };

    public getById(id: string): UserDTO {
        return this.users.find(u => u.id === id);
    };

    public create(user: UserDTO) {
        const newUser: UserDTO = {
            ...user,
            id: String(this.generateId())
        };
        this.users = [...this.users, newUser];
        return newUser;
    };

    public update(id: string, user: UserDTO): UserDTO {
        this.users = this.users.filter(u => u.id !== id);
        this.users = [...this.users, this.create(user)];
        return user;
    };

    public delete(id: string) {
        this.users = this.users.filter(u => u.id !== id);
    }

}