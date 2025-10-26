import { ApiProperty } from '@nestjs/swagger'
import {
	Column,
	Model,
	Table,
	DataType,
	BelongsToMany,
	BelongsTo,
	ForeignKey,
} from 'sequelize-typescript'
import { User } from 'src/users/users.model'

interface PostCreationAttrs {
	title: string
	content: string
	userId: number
	image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Unique ID' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number

	@ApiProperty({ example: 'My first post', description: 'Title' })
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare title: string

	@ApiProperty({
		example: 'Liosy ha',
		description: 'Content in da post',
	})
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare content: string

	@Column({
		type: DataType.STRING,
	})
	declare image: string

	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	userId: number

	@BelongsTo(() => User)
	author: User
}
