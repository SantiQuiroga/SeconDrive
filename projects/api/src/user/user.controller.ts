import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "@prisma/client";

import CreateUserDto from "./dto/create-user.dto";
import LoginDto from "./dto/login.dto";
import UserService from "./user.service";

@ApiTags('User')
@Controller('user')
export default class UserController {

  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<User> {
    const response = await this.userService.login(loginDto);
    return response;
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    const response = this.userService.register(createUserDto);
    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const response = await this.userService.findOne(Number(id));
    return response;
  }

  @Get()
  async findAll(): Promise<User[]> {
    const response = await this.userService.findAll();
    return response;
  }
}
