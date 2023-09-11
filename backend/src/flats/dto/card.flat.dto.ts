import {Flat} from "../entities/flat.entity";

export class FlatCardDto {
    id: number
    floor: number
    price: number
    rooms: number
    area_total: number
    layout_image: string

    constructor(flat: Flat) {
        this.id = flat.id
        this.floor = flat.floor
        this.price = flat.price
        this.rooms = flat.rooms
        this.area_total = flat.area_total
        this.layout_image = flat.layout_image
    }
}