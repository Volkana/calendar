import { Model } from 'mongoose';
import { CreateTodoDto } from './../dto/create-todo.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
    constructor( @InjectModel('Todo') private readonly todoModel: Model<Todo>  ) {}

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const createdTodo =  new this.todoModel(createTodoDto);
        return await  createdTodo.save();
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
    }

    async findOne(id) {
        let todo;
        try {
            todo = await this.todoModel.findOne({ _id: id });
        } catch (error) {
            throw new NotFoundException('Não foi possível encontrar o produto');
        }
        return todo;
    }

    async delete(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndRemove(id);
    }

    async update(id: string, todo: Todo) {
        let newTodo;
        console.log(id)
        console.log(todo)
        try {
            newTodo = await this.todoModel.findByIdAndUpdate(id, todo);
            return newTodo;

        } catch (error) {
            throw new NotFoundException();
        }
        return newTodo;
    }
}
