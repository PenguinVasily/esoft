import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.insert([
        { 'id': 101, 'floor': 1, 'pos_on_floor': 1, 'area_total': 33.5},
        { 'id': 102, 'floor': 1, 'pos_on_floor': 2, 'area_total': 64.8},
        { 'id': 103, 'floor': 1, 'pos_on_floor': 3, 'area_total': 36.5},
        { 'id': 104, 'floor': 1, 'pos_on_floor': 4, 'area_total': 35.8},
        { 'id': 105, 'floor': 1, 'pos_on_floor': 5, 'area_total': 66.6},
        { 'id': 106, 'floor': 1, 'pos_on_floor': 6, 'area_total': 85.3},
        { 'id': 107, 'floor': 2, 'pos_on_floor': 1, 'area_total': 33.5},
        { 'id': 108, 'floor': 2, 'pos_on_floor': 2, 'area_total': 64.8},
        { 'id': 109, 'floor': 2, 'pos_on_floor': 3, 'area_total': 36.5},
        { 'id': 110, 'floor': 2, 'pos_on_floor': 4, 'area_total': 35.8},
        { 'id': 111, 'floor': 2, 'pos_on_floor': 5, 'area_total': 66.6},
        { 'id': 112, 'floor': 2, 'pos_on_floor': 6, 'area_total': 85.3},
        { 'id': 113, 'floor': 3, 'pos_on_floor': 1, 'area_total': 33.5},
        { 'id': 114, 'floor': 3, 'pos_on_floor': 2, 'area_total': 64.8},
        { 'id': 115, 'floor': 3, 'pos_on_floor': 3, 'area_total': 36.5},
        { 'id': 116, 'floor': 3, 'pos_on_floor': 4, 'area_total': 35.8},
        { 'id': 117, 'floor': 3, 'pos_on_floor': 5, 'area_total': 66.6},
        { 'id': 118, 'floor': 3, 'pos_on_floor': 6, 'area_total': 85.3},
        { 'id': 119, 'floor': 4, 'pos_on_floor': 1, 'area_total': 33.5},
        { 'id': 120, 'floor': 4, 'pos_on_floor': 2, 'area_total': 64.8},
        { 'id': 121, 'floor': 4, 'pos_on_floor': 3, 'area_total': 36.5},
        { 'id': 122, 'floor': 4, 'pos_on_floor': 4, 'area_total': 35.8},
        { 'id': 123, 'floor': 4, 'pos_on_floor': 5, 'area_total': 66.6},
        { 'id': 124, 'floor': 4, 'pos_on_floor': 6, 'area_total': 85.3}
    ]).into('flats');

    await knex.insert([
        { 'flat_id': 101, 'price': 2880000, 'rooms': 1, 'area_kitchen': 11.4, 'area_live': 14.5},
        { 'flat_id': 102, 'price': 5050000, 'rooms': 2, 'area_kitchen': 19.2, 'area_live': 33},
        { 'flat_id': 103, 'price': 3030000, 'rooms': 1, 'area_kitchen': 11.7, 'area_live': 17.4},
        { 'flat_id': 104, 'price': 3000000, 'rooms': 1, 'area_kitchen': 15, 'area_live': 11.2},
        { 'flat_id': 105, 'price': 5200000, 'rooms': 2, 'area_kitchen': 18.5, 'area_live': 29.4},
        { 'flat_id': 106, 'price': 6050000, 'rooms': 3, 'area_kitchen': 16.6, 'area_live': 46.6},
        { 'flat_id': 107, 'price': 2880000, 'rooms': 1, 'area_kitchen': 11.4, 'area_live': 14.5},
        { 'flat_id': 108, 'price': 5050000, 'rooms': 2, 'area_kitchen': 19.2, 'area_live': 33},
        { 'flat_id': 109, 'price': 3030000, 'rooms': 1, 'area_kitchen': 11.7, 'area_live': 17.4},
        { 'flat_id': 110, 'price': 3000000, 'rooms': 1, 'area_kitchen': 15, 'area_live': 11.2},
        { 'flat_id': 111, 'price': 5200000, 'rooms': 2, 'area_kitchen': 18.5, 'area_live': 29.4},
        { 'flat_id': 112, 'price': 6050000, 'rooms': 3, 'area_kitchen': 16.6, 'area_live': 46.6},
        { 'flat_id': 113, 'price': 2880000, 'rooms': 1, 'area_kitchen': 11.4, 'area_live': 14.5},
        { 'flat_id': 114, 'price': 5050000, 'rooms': 2, 'area_kitchen': 19.2, 'area_live': 33},
        { 'flat_id': 115, 'price': 3030000, 'rooms': 1, 'area_kitchen': 11.7, 'area_live': 17.4},
        { 'flat_id': 116, 'price': 3000000, 'rooms': 1, 'area_kitchen': 15, 'area_live': 11.2},
        { 'flat_id': 117, 'price': 5200000, 'rooms': 2, 'area_kitchen': 18.5, 'area_live': 29.4},
        { 'flat_id': 118, 'price': 6050000, 'rooms': 3, 'area_kitchen': 16.6, 'area_live': 46.6},
        { 'flat_id': 119, 'price': 2880000, 'rooms': 1, 'area_kitchen': 11.4, 'area_live': 14.5},
        { 'flat_id': 120, 'price': 5050000, 'rooms': 2, 'area_kitchen': 19.2, 'area_live': 33},
        { 'flat_id': 121, 'price': 3030000, 'rooms': 1, 'area_kitchen': 11.7, 'area_live': 17.4},
        { 'flat_id': 122, 'price': 3000000, 'rooms': 1, 'area_kitchen': 15, 'area_live': 11.2},
        { 'flat_id': 123, 'price': 5200000, 'rooms': 2, 'area_kitchen': 18.5, 'area_live': 29.4},
        { 'flat_id': 124, 'price': 6050000, 'rooms': 3, 'area_kitchen': 16.6, 'area_live': 46.6}
    ]).into('flat_features')


    await knex.insert([
        { 'flat_id': 101, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
        { 'flat_id': 102, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
        { 'flat_id': 103, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
        { 'flat_id': 104, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
        { 'flat_id': 105, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
        { 'flat_id': 106, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'},
        { 'flat_id': 107, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
        { 'flat_id': 108, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
        { 'flat_id': 109, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
        { 'flat_id': 110, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
        { 'flat_id': 111, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
        { 'flat_id': 112, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'},
        { 'flat_id': 113, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
        { 'flat_id': 114, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
        { 'flat_id': 115, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
        { 'flat_id': 116, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
        { 'flat_id': 117, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
        { 'flat_id': 118, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'},
        { 'flat_id': 119, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png'},
        { 'flat_id': 120, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/12/6c/4d7c3f0588398eec1615c2bc43b072be5d4f6c12.png'},
        { 'flat_id': 121, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/5c/85/9e5c33110c6ff1b668427b0628f2db6afc35855c.png'},
        { 'flat_id': 122, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d8/13/ea69243b7041e49d9947d01d4061c636bb4213d8.png'},
        { 'flat_id': 123, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/d9/85/b730707e30d58269aa500312c0a0f747748785d9.png'},
        { 'flat_id': 124, 'layout_image': 'https://cdn.esoft.digital/content/cluster/layouts_2d/f4/7b/1ec36ffbf6f178a017b6f6affcb2d210d0ad7bf4.png'}
    ]).into('flat_layouts')
}


export async function down(knex: Knex): Promise<void> {
}

