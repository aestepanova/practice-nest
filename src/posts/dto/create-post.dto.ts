import { ApiProperty } from '@nestjs/swagger'

export class CreatePostDto {
	@ApiProperty({ example: '1', description: 'Unique ID' })
	readonly userId: number

	@ApiProperty({ example: 'My first post', description: 'Title' })
	readonly title: string

	@ApiProperty({
		example: 'Liosy ha',
		description: 'Content in da post',
	})
	readonly content: string
}
