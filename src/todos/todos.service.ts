import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

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

  create(todo: Todo): void {
    if (todo.id === undefined) {
      todo.id = this.todos.length + 1;
    }
    this.todos = [...this.todos, todo];
  }
}
