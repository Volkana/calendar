import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoSchema } from '../schemas/todos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema}])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
