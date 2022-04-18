import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user.controller';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers: [UsersService, UserMapper, UsersRepository],
})
export class UsersModule { }
