import {Injectable} from "@nestjs/common";
import {PostgreSQL} from "../database/postgresql";
import {Flat} from "./entities/flat.entity";

@Injectable()
export class FlatsRepository {
    private readonly flatsTable = 'flats'
    private readonly flatFeaturesTable = 'flat_features'
    private readonly flatLayoutTable = 'flat_layouts';

    constructor(private readonly postgresql: PostgreSQL) {}

    async findAll(
        offset: number = 0,
        limit: number = 10,

        field: string = "",
        order: string = "",

        min_price: number = 0,
        max_price: number | undefined,

        min_rooms: number = 0,
        max_rooms: number | undefined,

        min_area_total: number = 0,
        max_area_total: number | undefined,

        min_area_kitchen: number = 0,
        max_area_kitchen: number | undefined,

        min_area_live: number = 0,
        max_area_live: number | undefined
    ): Promise<Flat[]> {

        const query = this.getFilteredQuery(
            min_price, max_price, min_rooms, max_rooms, min_area_total,
            max_area_total, min_area_kitchen, max_area_kitchen, min_area_live, max_area_live
        )

        query.offset(offset).limit(limit)


        if (field) {
            query.orderBy(field, order)
        }

        return await query
    }

    async count(
        min_price: number = 0,
        max_price: number | undefined,

        min_rooms: number = 0,
        max_rooms: number | undefined,

        min_area_total: number = 0,
        max_area_total: number | undefined,

        min_area_kitchen: number = 0,
        max_area_kitchen: number | undefined,

        min_area_live: number = 0,
        max_area_live: number | undefined
    ) : Promise<number> {

        const query = this.getFilteredQuery(
            min_price, max_price, min_rooms, max_rooms, min_area_total,
            max_area_total, min_area_kitchen, max_area_kitchen, min_area_live, max_area_live
        )
        query.count()

        const total = await query.first()
        return total.count
    }

    private getFilteredQuery(
        min_price: number = 0,
        max_price: number | undefined,

        min_rooms: number = 0,
        max_rooms: number | undefined,

        min_area_total: number = 0,
        max_area_total: number | undefined,

        min_area_kitchen: number = 0,
        max_area_kitchen: number | undefined,

        min_area_live: number = 0,
        max_area_live: number | undefined
    ) {
        const query = this.postgresql.client<Flat>(this.flatsTable)
            .select()
            .leftJoin(this.flatFeaturesTable, `${this.flatFeaturesTable}.flat_id`, '=', `${this.flatsTable}.id`)
            .leftJoin(this.flatLayoutTable, `${this.flatLayoutTable}.flat_id`, '=', `${this.flatsTable}.id`)

        query.where('price', '>=', min_price)
        if (max_price) {
            query.where('price', '<=', max_price)
        }

        query.where('rooms', '>=', min_rooms)
        if (max_rooms) {
            query.where('rooms', '<=', max_rooms)
        }

        query.where('area_total', '>=', min_area_total)
        if (max_area_total) {
            query.where('area_total', '<=', max_area_total)
        }

        query.where('area_kitchen', '>=', min_area_kitchen)
        if (max_area_kitchen) {
            query.where('area_kitchen', '<=', max_area_kitchen)
        }

        query.where('area_live', '>=', min_area_live)
        if (max_area_live) {
            query.where('area_live', '<=', max_area_live)
        }

        return query
    }

    async findOne(id: number): Promise<Flat | undefined> {
        return this.postgresql.client<Flat>(this.flatsTable)
            .select()
            .leftJoin(this.flatFeaturesTable, `${this.flatFeaturesTable}.flat_id`, '=', `${this.flatsTable}.id`)
            .leftJoin(this.flatLayoutTable, `${this.flatLayoutTable}.flat_id`, '=', `${this.flatsTable}.id`)
            .where(`${this.flatsTable}.id`, id)
            .first()
            .then((flat) => {return flat})
    }
}