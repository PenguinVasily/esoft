import {Controller, Get, Param, Query} from '@nestjs/common';
import { FlatsService } from './flats.service';
import {FlatCardDto} from "./dto/card.flat.dto";
import {FlatDto} from "./dto/flat.dto";
import {PaginatedList} from "../common/dto/paginated_list";


@Controller('flats')
export class FlatsController {
  constructor(private readonly flatsService: FlatsService) {}

  @Get()
  async findAll(
      @Query('offset') offset: number = 0,
      @Query('limit') limit: number = 10,

      @Query('sort') sort: string = "",

      @Query('prices') prices: string = "",
      @Query('rooms') rooms: string = "",
      @Query('area_total') area_total: string = "",
      @Query('area_kitchen') area_kitchen: string = "",
      @Query('area_live') area_live: string = ""
  ) : Promise<PaginatedList<FlatCardDto>> {
    const order = sort.startsWith('-') ? 'desc' : 'asc'
    const field = sort.startsWith('-') ? sort.substring(1) : sort

    const [min_price, max_price] = prices.split(',').map(Number)
    const [min_rooms, max_rooms] = rooms.split(',').map(Number)
    const [min_area_total, max_area_total] = area_total.split(',').map(Number)
    const [min_area_kitchen, max_area_kitchen] = area_kitchen.split(',').map(Number)
    const [min_area_live, max_area_live] = area_live.split(',').map(Number)

    return await this.flatsService.findAll(
        +offset, +limit, field, order, min_price, max_price,
        min_rooms, max_rooms, min_area_total, max_area_total,
        min_area_kitchen, max_area_kitchen, min_area_live, max_area_live
    )
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<FlatDto> {
    const flat = await this.flatsService.findOne(+id)
    return new FlatDto(flat)
  }
}
