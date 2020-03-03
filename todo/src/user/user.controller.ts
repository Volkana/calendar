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
    findAll(): User[] | string {
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
    login(@Body() user: User): string {
        return  `Name: ${user.name}
        Name: ${user.email}
        Name: ${user.password}`;
    }

    @Delete()
    delete() {
        return 'deletado';
    }
}
