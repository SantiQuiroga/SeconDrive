import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "@prisma/client";

import PrismaService from "@/prisma/prisma.service";

import CreateUserDto from './dto/create-user.dto';
import LoginDto from './dto/login.dto';
import UpdateUserDto from "./dto/update-user.dto";

@Injectable()
export default class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(loginDto: LoginDto): Promise<User> {
    const { email, password } = loginDto;
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Wrong credentials');
    }
    if (user.password !== password) {
      throw new UnauthorizedException('Wrong credentials');
    }
    return user;
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prismaService.user.create({
      data: createUserDto,
    });
    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { userId: id },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prismaService.user.update({
      where: { userId: id },
      data: updateUserDto,
    });
  }
}
