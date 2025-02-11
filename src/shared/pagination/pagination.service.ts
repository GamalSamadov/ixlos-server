import { Injectable } from '@nestjs/common'

import { PaginationInput } from './inputs/pagination.input'

@Injectable()
export class PaginationService {
	getPagination(input: PaginationInput, defaultPerPage = 10) {
		const page = +input.page || 1
		const take = +input.take || defaultPerPage

		const skip = (page - 1) * take

		return {
			take,
			skip
		}
	}
}
