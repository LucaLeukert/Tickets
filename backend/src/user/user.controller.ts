import { Controller, Get, Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('all')
    async getAllUsers() {
        const users = await this.userService.findAll();
        const user = await this.userService.findOne({
            username: 'test',
        });

        console.log(user);

        users.forEach((user) => {
            console.log(user._id);
        });
    }
}
