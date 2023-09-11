import {HttpException, HttpStatus, Injectable, Query} from '@nestjs/common';
import {FlatsRepository} from "./flats.repository";
import {Flat} from "./entities/flat.entity";
import {FlatCardDto} from "./dto/card.flat.dto";
import {FlatDto} from "./dto/flat.dto";
import {PaginatedList} from "../common/dto/paginated_list";

@Injectable()
export class FlatsService {
  constructor(private readonly flatRepository: FlatsRepository) {}

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
  ) : Promise<PaginatedList<Flat>> {

    if (field && !(field in Flat)) {
      throw new HttpException('Неизвестное поле для сортировки.', HttpStatus.BAD_REQUEST)
    }

    const flats = await this.flatRepository.findAll(
        offset, limit, field, order, min_price, max_price, min_rooms,
        max_rooms, min_area_total, max_area_total, min_area_kitchen,
        max_area_kitchen, min_area_live, max_area_live
    )

    const total = await this.flatRepository.count(
        min_price, max_price, min_rooms,
        max_rooms, min_area_total, max_area_total, min_area_kitchen,
        max_area_kitchen, min_area_live, max_area_live
    )

    return new PaginatedList<Flat>(offset, limit, flats.length, total, flats)
  }

  async findOne(id: number) : Promise<Flat> {
    const flat = await this.flatRepository.findOne(id)
    if (flat) {
      return flat
    }
    throw new HttpException('Квартира не найдена.', HttpStatus.NOT_FOUND)
  }
}
