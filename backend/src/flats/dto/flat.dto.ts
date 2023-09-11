import {Flat} from "../entities/flat.entity";

export class FlatDto {
    id: number
    floor: number
    pos_on_floor: number
    price: number
    rooms: number
    area_total: number
    area_kitchen: number
    area_live: number
    layout_image: string

    constructor(flat: Flat) {
        this.id = flat.id
        this.floor = flat.floor
        this.pos_on_floor = flat.pos_on_floor
        this.price = flat.price
        this.rooms = flat.rooms
        this.area_total = flat.area_total
        this.area_kitchen = flat.area_kitchen
        this.area_live = flat.area_live
        this.layout_image = flat.layout_image
    }
}