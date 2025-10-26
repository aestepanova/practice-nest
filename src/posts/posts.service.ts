import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { Post } from './posts.model'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class PostsService {
	constructor(@InjectModel(Post) private postRepository: typeof Post) {}

	async create(dto: CreatePostDto, image: any) {
		const fileName = 'asasdas'
		const post = await this.postRepository.create({ ...dto, image: fileName })
		return post
	}
}
