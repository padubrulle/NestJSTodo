import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

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

  update(id: string, todo: CreateTodoDto) {
    const toDoToUpdate = this.findOne(id);
    if (!toDoToUpdate) {
      throw new NotFoundException('Todo not found');
    } else {
      Object.assign(toDoToUpdate, todo);
      return { updatedTodo: true, toDoToUpdate };
    }
  }

  delete(id: string) {
    const toDoToDelete = this.findOne(id);
    const todoCountBefore = this.todos.length;
    if (!toDoToDelete) {
      throw new NotFoundException('Todo not found');
    } else {
      this.todos = [...this.todos.filter((todo) => todo.id.toString() !== id)];
      if (todoCountBefore > this.todos.length) {
        return { deletedTodo: 0, toDoToDelete };
      } else {
        return { deletedTodo: 0 };
      }
    }
  }
}
