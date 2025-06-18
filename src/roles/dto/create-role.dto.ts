import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'Name for role' })
  readonly value: string;

  @ApiProperty({
    example: 'This role allows you to ban other users',
    description: "Role's description",
  })
  readonly description: string;
}
