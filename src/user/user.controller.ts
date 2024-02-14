import { Body, Controller, Get , Param, Post ,Put , Delete } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from './schemas/user.schema';
import { CreateUserDto} from './dto/create-user.dto'
import { UpdateUserDto} from './dto/update-user.dto'


// base url 
@Controller('user')
export class UserController {
    constructor(private userService : UserService){}
   
    // get all users
    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.findAll();
    }
    // get user by id
    @Get(':id')
    async getUser( @Param('id') id:string ) : Promise<User>{
        return this.userService.findById(id);
    }
    // Add new user
    @Post("create")
    async createUser(@Body() user :  CreateUserDto,): Promise<User>{
        return this.userService.create(user);
    }

    @Put("update/:id")
    async updateUser(
        @Param('id') id:string,
        @Body() user :  UpdateUserDto,): Promise<User>{
        return this.userService.update(id,user);
    }

    @Delete("delete/:id")
    async deleteUser(
        @Param('id') id:string,
       ): Promise<User>{
        return this.userService.delete(id);
       
    }
}
