import { prop, ModelOptions } from "@typegoose/typegoose"
import { ApiProperty } from "@nestjs/swagger"


@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class User {
    @ApiProperty({description:"用户名",example:"user1"})
    @prop()
    username: string

    @ApiProperty({description:"密码",example:"pass1"})
    @prop()
    password: string
}