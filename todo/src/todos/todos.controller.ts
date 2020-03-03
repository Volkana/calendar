import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param } from '@nestjs/common';

import { CreateTodoDto } from './../dto/create-todo.dto';
import { TodosService } from './todos.service';
import { Todo } from 'src/interfaces/todo.interface';

@Controller('todos')
export class TodosController {
    constructor( private todosService: TodosService) {}

    @Get(':id')
    async findOne(@Param('id') id): Promise<Todo> {
         const todo = this.todosService.findOne(id);
         return todo;
    }

    @Get()
    findall(): Promise<Todo[]> {
        return this.todosService.findAll();
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): string {
        const create = this.todosService.create(createTodoDto);
        return  `Name: ${createTodoDto.name}
        Desc: ${createTodoDto.description}
        initialDate: ${createTodoDto.initialDate}
        finalDate: ${createTodoDto.finalDate}`;
    }

    @Put(':id')
    async update(@Param('id') id, @Body() createTodoDto: CreateTodoDto): Promise<Todo>{
        return await this.todosService.update(id, createTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id ): Promise<Todo> {
        return await this.todosService.delete(id);
    }
}
