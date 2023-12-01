
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';
import CreateUserDto from '@/user/dto/create-user.dto';
import LoginDto from '@/user/dto/login.dto';
import UserService from '@/user/user.service';

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              create: jest.fn(),
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
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

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);

      const result = await userService.login(loginDto);

      expect(result).toEqual(user);
    });

    it('should throw UnauthorizedException if the user does not exist', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password',
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      await expect(userService.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if the password is incorrect', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'wrongpassword',
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

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);

      await expect(userService.login(loginDto)).rejects.toThrow(UnauthorizedException);
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

      jest.spyOn(prismaService.user, 'create').mockResolvedValue(createdUser);

      const result = await userService.register(createUserDto);

      expect(result).toEqual(createdUser);
    });
  });

  describe('findOne', () => {
    it('should return the user with the specified id', async () => {
      const userId = 1;

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

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);

      const result = await userService.findOne(userId);

      expect(result).toEqual(user);
    });

    it('should throw BadRequestException if the user does not exist', async () => {
      const userId = 1;

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      await expect(userService.findOne(userId)).rejects.toThrow(BadRequestException);
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

      jest.spyOn(prismaService.user, 'findMany').mockResolvedValue(users);

      const result = await userService.findAll();

      expect(result).toEqual(users);
    });
  });
});
