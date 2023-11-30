import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

class CreateCartDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}

export default CreateCartDto;
