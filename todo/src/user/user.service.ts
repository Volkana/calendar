import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { CreateUserDto } from './../dto/create-user.dto';
import { User } from './../interfaces/users.interface';

@Injectable()
export class UserService {

    constructor( @InjectModel('User') private readonly userModel: Model<User> ) {}
    // criar o usuário
    async register(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userModel.findOne({ email: createUserDto.email});
        if (user) {
            throw new HttpException('Usuário já existente', HttpStatus.BAD_REQUEST);
        }
        const createdUser =  new this.userModel(createUserDto);
        console.log(createdUser);
        createdUser.password = await bcrypt.hash(createdUser.password, 10);
        console.log(createdUser);
        await createdUser.save();
        return createdUser;
    }

    // logar o usuário e gerar o token
    async login(createUserDto: CreateUserDto) {
        const user = await this.userModel.findOne({ email: createUserDto.email});
        if (!user) {
            throw new HttpException('Usuário não existente', HttpStatus.BAD_REQUEST);
        }
        const compare = await bcrypt.compare(createUserDto.password, user.password);
        if (!compare) {
            throw new HttpException('Senha inválida', HttpStatus.BAD_REQUEST);

        }
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id) {
        let user;
        try {
            user = await this.userModel.findOne({ _id: id });
        } catch (error) {
            throw new NotFoundException('Não foi possível encontrar o usuário');
        }
        return user;
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User) {
        let newTodo;
        try {
            newTodo = await this.userModel.findByIdAndUpdate(id, user);
            return newTodo;

        } catch (error) {
            throw new NotFoundException();
        }
        return newTodo;
    }
}
