import { Body, Controller, Post, UploadedFile } from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'

@Controller('posts')
export class PostsController {
	constructor(private postService: PostsService) {}

	@Post()
	create(@Body() dto: CreatePostDto, @UploadedFile() image): any {
		return this.postService.create(dto, image)
	}
}
