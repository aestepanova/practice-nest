import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsController } from './posts.controller'
import { User } from 'src/users/users.model'
import { Post } from './posts.model'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
	providers: [PostsService],
	controllers: [PostsController],
	exports: [PostsService],
	imports: [SequelizeModule.forFeature([User, Post])],
})
export class PostsModule {}
