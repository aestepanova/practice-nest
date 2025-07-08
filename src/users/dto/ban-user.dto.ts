import { ApiProperty } from '@nestjs/swagger'

export class BanUserDto {
	@ApiProperty({ example: 17, description: "User's ID to ban" })
	readonly userId: number

	@ApiProperty({ example: 'Dudulka', description: 'Reason to ban' })
	readonly banReason: string
}
