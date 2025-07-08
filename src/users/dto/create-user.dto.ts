import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsEmail } from 'class-validator'

export class CreateUserDto {
	@ApiProperty({ example: 'aeivanov@gmail.com', description: 'E-mail address' })
	@IsString({ message: 'Must be a string' })
	@IsEmail({}, { message: 'Incorrect e-mail' })
	readonly email: string

	@ApiProperty({ example: '1234567', description: "User's password" })
	@IsString({ message: 'Must be a string' })
	@Length(8, 16, { message: 'More than 8 and less than 16 symbols' })
	readonly password: string
}
