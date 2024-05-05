interface PaginationOptions {
    page?: number
    pageSize?: number
}

interface PaginatedData<T> {
    data: T[]
    page: number
    pageSize: number
    total: number
}

export function paginate<T>(
  data: T[],
  { page = 1, pageSize = 10 }: PaginationOptions,
): PaginatedData<T> {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize

  const paginatedData = data.slice(startIndex, endIndex)
  const total = data.length

  return {
    data: paginatedData,
    page,
    pageSize,
    total,
  }
}
