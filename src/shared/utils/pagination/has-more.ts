export function hasMorePagination(totalCount?: number, take?: number) {
	return take < totalCount
}
