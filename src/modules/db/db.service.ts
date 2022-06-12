import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './database/user.entity';

@Injectable()
export class DBService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find({
      relations: ['comments'],
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  async save(user: User) {
    return await this.userRepository.save(user);
  }

  async create(user: User) {
    return await this.userRepository.create(user);
  }
}
