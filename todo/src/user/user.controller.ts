import { CreateUserDto } from './../dto/create-user.dto';
import { User } from './../interfaces/users.interface';
import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Param,
    UnauthorizedException} from '@nestjs/common';

import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
    constructor( private userService: UserService) {}
    @Get()
    findAll(): Promise<User[]> | string {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<User | undefined> {
        const user = this.userService.findOne(id);
        if (user) {
            return user;
        } else {
            throw new UnauthorizedException();
        }
    }
    @Post()
    async signup(@Body() createUserDto: CreateUserDto): Promise<string> {
        const create = await this.userService.register(createUserDto);
        return  `Id: ${create.id}
        Name: ${create.name}
        Email: ${create.email}
        Password: ${create.password}`;
    }

    @Post('login')
    async login(@Body() user: CreateUserDto): Promise<string> {
        const login = await this.userService.login(user);
        return 'login realizado com sucesso';
    }

    @Delete()
    delete() {
        return 'deletado';
    }
}
