

import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';

import CreateUserDto from '@/user/dto/create-user.dto';
import LoginDto from '@/user/dto/login.dto';
import UserController from '@/user/user.controller';
import UserService from '@/user/user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: UserService,
          useValue: {
            login: jest.fn(),
            register: jest.fn(),
            findOne: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('login', () => {
    it('should return the user if the credentials are correct', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password',
      };

      const user: User = {
        userId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password',
        streetAddress: '123 Street',
        building: 'Building',
        zipCode: '12345',
        city: 'City',
        country: 'Country',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(userService, 'login').mockResolvedValue(user);

      const result = await userController.login(loginDto);

      expect(result).toEqual(user);
    });

    it('should throw UnauthorizedException if the user does not exist', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password',
      };

      jest.spyOn(userService, 'login').mockRejectedValue(new UnauthorizedException('Wrong credentials'));

      await expect(userController.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('register', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password',
        streetAddress: '123 Street',
        building: 'Building',
        zipCode: '12345',
        city: 'City',
        country: 'Country',
        phone: '1234567890',
      };

      const createdUser: User = {
        userId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password',
        streetAddress: '123 Street',
        building: 'Building',
        zipCode: '12345',
        city: 'City',
        country: 'Country',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(userService, 'register').mockResolvedValue(createdUser);

      const result = await userController.register(createUserDto);

      expect(result).toEqual(createdUser);
    });
  });

  describe('findOne', () => {
    it('should return the user with the specified id', async () => {
      const userId = '1';

      const user: User = {
        userId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password',
        streetAddress: '123 Street',
        building: 'Building',
        zipCode: '12345',
        city: 'City',
        country: 'Country',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(userService, 'findOne').mockResolvedValue(user);

      const result = await userController.findOne(userId);

      expect(result).toEqual(user);
    });

    it('should throw BadRequestException if the user does not exist', async () => {
      const userId = '1';

      jest.spyOn(userService, 'findOne').mockRejectedValue(new BadRequestException('User not found'));

      await expect(userController.findOne(userId)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users: User[] = [
        {
          userId: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'test1@example.com',
          password: 'password1',
          streetAddress: '123 Street',
          building: 'Building',
          zipCode: '12345',
          city: 'City',
          country: 'Country',
          phone: '1234567890',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'test2@example.com',
          password: 'password2',
          streetAddress: '456 Street',
          building: 'Building',
          zipCode: '54321',
          city: 'City',
          country: 'Country',
          phone: '0987654321',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(userService, 'findAll').mockResolvedValue(users);

      const result = await userController.findAll();

      expect(result).toEqual(users);
    });
  });
});
