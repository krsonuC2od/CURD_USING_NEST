import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel : mongoose.Model<User>
    ){}

async findAll() : Promise<User[]>{
    const users = await this.userModel.find();
    if(!users){
        throw new NotFoundException( "User not Available");
    }
    return users;
}

async create(user : User): Promise<User>{
    const res = await this.userModel.create(user);
    return res;
}

async findById(id : string): Promise<User>{
    const book = await this.userModel.findById(id);
    if(!book){
        throw new NotFoundException( "User not found");
    }
    return book;
}

async update(id : string , user : User): Promise<User>{
    return await this.userModel.findByIdAndUpdate(id , user, {
       new : true,
       runValidators:true,
    });
}

async delete(id : string ): Promise<User>{
    return await this.userModel.findByIdAndDelete(id);
}

}
