# topfullstack
Nodejs+vuejs全栈开发《全站之巅》视频网站

一、创建项目
    1、cnpm i -g @nestjs/cli
    2、nest new server
    3、cnpm install
    4、nest g app admin   //创建子项目
    5、nest start -w admin   //监听子项目服务
    6、nest g lib db    //创建公用数据库模块  （@libs）
    7、在admin子项目里app.module.ts里引用DbModule
        import { Module } from '@nestjs/common';
        import { AppController } from './app.controller';
        import { AppService } from './app.service';
        import { DbModule } from '@libs/db';

        @Module({
            imports: [
                DbModule
            ],
            controllers: [AppController],
            providers: [AppService],
        })
        export class AppModule {}

    8、cnpm i nestjs-typegoose @typegoose/typegoose -S
    9、cnpm i mongoose @types/mongoose -S
