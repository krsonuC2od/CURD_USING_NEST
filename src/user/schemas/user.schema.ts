import{Schema , Prop , SchemaFactory} from '@nestjs/mongoose';

@Schema({
    timestamps:true
}) 
export class User {
    @Prop()
    name : string;

    @Prop()
    age : number; 

    @Prop()
    address : string;

}

export const UserSchema = SchemaFactory.createForClass(User);

