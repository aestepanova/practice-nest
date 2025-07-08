import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class AddRoleDto {
	@ApiProperty({
		example: 'Manager',
		description: 'Role, which will add to the user',
	})
	@IsString({ message: 'Must be a string' })
	readonly role: string

	@IsNumber({}, { message: 'Must be a number' })
	@ApiProperty({ example: 17, description: "User's ID" })
	readonly userId: number
}
