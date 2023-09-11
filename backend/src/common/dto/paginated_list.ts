export class PaginatedList<T> {
    offset: number
    limit: number
    count: number
    total: number
    items: T[]

    constructor(offset: number, limit: number, count: number, total: number, items: T[]) {
        this.offset = offset
        this.limit = limit
        this.count = count
        this.total = total
        this.items = items
    }
}