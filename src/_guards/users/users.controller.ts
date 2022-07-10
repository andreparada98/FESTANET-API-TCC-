import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';


@Controller('users')
@ApiTags('Usuario')
export class UsersController {
    constructor(private userService: UsersService){}

    
}
