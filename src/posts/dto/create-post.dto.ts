import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreatePostDto {
	@ApiProperty({ example: '1', description: 'Unique ID' })
	@IsNumber()
	@IsNotEmpty()
	readonly userId: number

	@ApiProperty({ example: 'My first post', description: 'Title' })
	@IsString()
	@IsNotEmpty()
	readonly title: string

	@ApiProperty({
		example: 'Lipsy ha',
		description: 'Content in da post',
	})
	@IsString()
	@IsNotEmpty()
	readonly content: string
}
