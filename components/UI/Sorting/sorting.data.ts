import { EnumSorting, ISortingItem } from './sorting.interface';

export const sortingData: ISortingItem[] = [
{
    name: 'Price: High to Low',
    value: EnumSorting.HIGH_TO_LOW_PRICE
},
{
    name: 'Price: Low to High',
    value: EnumSorting.LOW_TO_HIGH_PRICE
},
{
    name: 'Newest',
    value: EnumSorting.NEWEST
},
{
    name: 'Oldest',
    value: EnumSorting.OLDEST
}
];
