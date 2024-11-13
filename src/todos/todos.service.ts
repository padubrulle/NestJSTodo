import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Learn NestJS',
      description:
        'follow tuto on yt https://www.youtube.com/watch?v=UepQp2OT4gg',
      done: false,
    },
    {
      id: 2,
      title: 'Do project with NestJS',
      description: 'Create a new nestJS project',
      done: true,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): Todo {
    return this.todos.find((todo) => todo.id.toString() === id);
  }

  create(todo: CreateTodoDto): Todo {
    const newTodo: Todo = todo;
    if (newTodo.id === undefined) {
      newTodo.id = this.todos.length + 1;
    }
    this.todos = [...this.todos, newTodo];
    return newTodo;
  }

  update(id: string, todo: CreateTodoDto): Todo {
    const toDoToUpdate = this.findOne(id);
    if (!toDoToUpdate) {
      throw new NotFoundException('Todo not found');
    }
    Object.assign(toDoToUpdate, todo);
    return toDoToUpdate;
  }

  delete(id: string): string {
    const toDoToDelete = this.findOne(id);
    if (!toDoToDelete) {
      throw new NotFoundException('Todo not found');
    } else {
      this.todos = this.todos.filter((todo) => todo.id !== Number(id));
      return `La todo avec l'id : ${id} a été supprimée`;
    }
  }
}
