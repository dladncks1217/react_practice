import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}
  @Get('check')
  Check() {
    return 'asdf';
  }

  @Post('join')
  Join(@Body() body) {
    return this.UsersService.Join(body.name, body.email, body.password);
  }
}
