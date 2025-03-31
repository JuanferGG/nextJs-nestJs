import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, username: 'john', password: 'password123' },
        { id: 2, username: 'jane', password: 'securepass' },
    ];

    getUsers(){
        return this.users;
    }
}
