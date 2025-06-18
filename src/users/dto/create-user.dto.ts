import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'aeivanov@gmail.com', description: 'E-mail address' })
  readonly email: string;

  @ApiProperty({ example: '1234567', description: "User's password" })
  readonly password: string;
}
