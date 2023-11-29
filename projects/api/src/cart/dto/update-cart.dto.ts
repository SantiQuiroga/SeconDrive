import { PartialType } from '@nestjs/swagger';

import CreateCartDto from './create-cart.dto';

class UpdateCartDto extends PartialType(CreateCartDto) {}

export default UpdateCartDto;
