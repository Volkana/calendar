import { User } from './../interfaces/users.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 'ijbgjivfdjlkfd',
            name: 'user1',
            email: 'user1@gmail.com',
            password: '12345',
        },
        {
            id: 'ij32324fdsdkfd',
            name: 'user2',
            email: 'user2@gmail.com',
            password: '13245',
        },
        {
            id: 'fds4fdjlkfd',
            name: 'user3',
            email: 'user3@gmail.com',
            password: '34512',
        },
        {
            id: 'ijbgjivf123dcs',
            name: 'user4',
            email: 'user4@gmail.com',
            password: '12345',
        },
    ];

    async findOne(email: string): Promise<User|undefined> {
        return this.users.find(user => user.email === email);
    }

    findAll(): User[] {
        return this.users;
    }
}
