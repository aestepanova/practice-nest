import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate, ValidationError } from 'class-validator'
import { ValidationException } from 'src/exceptions/validation.exception'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
		const mType = metadata.metatype
		const obj = plainToInstance(metadata.metatype!, value)

		const errors = await validate(obj)

		if (errors.length) {
			// console.log(errors)
			let messages = errors.map((err) => {
				return `${err.property} - ${Object.values(err.constraints!).join(', ')}`
			})
			console.log(messages)
			throw new ValidationException(messages)
		}

		return value
	}
}
