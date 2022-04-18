import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({
        unique: true
    })
    readonly name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        console.log('Creating user entity for ', this.name);
    }
};