export enum EnumSorting {
    LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
    HIGH_TO_LOW_PRICE = 'HIGH_TO_LOW_PRICE',
    NEWEST = 'Newest',
    OLDEST = 'Oldest'
}


export interface ISortingItem {
    name: 'Price: Low to High' | 'Price: High to Low' | 'Newest' | 'Oldest';
    value: EnumSorting
}