import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TodosModule,
    UserModule,
    MongooseModule.forRoot('mongodb://root:12345@127.0.0.1:27017/'),
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
