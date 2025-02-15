import { Injectable } from '@nestjs/common'

import { PaginationInput } from './inputs/pagination.input'

@Injectable()
export class PaginationService {
	getPagination(input: PaginationInput, defaultPerPage = 10) {
		const take = +input.take || defaultPerPage

		return {
			take
		}
	}
}
