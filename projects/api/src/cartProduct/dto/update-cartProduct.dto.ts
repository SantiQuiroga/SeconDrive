
import { PartialType } from '@nestjs/swagger';

import CreateCartProductDto from './create-cartProduct.dto';

class UpdateCartProductDto extends PartialType(CreateCartProductDto) {}

export default UpdateCartProductDto;
