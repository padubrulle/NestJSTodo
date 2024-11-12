import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'Learn NestJS',
      description:
        'follow tuto on yt https://www.youtube.com/watch?v=UepQp2OT4gg',
    },
    {
      id: 2,
      title: 'Do project with NestJS',
      description: 'Create a new nestJS project',
    },
  ];

  findAll(): any[] {
    return this.todos;
  }
}
