import { IProduct } from '../types/IProduct.interface';

export const products: IProduct[] = [
    {
        id: 1,
        name: 'Sushi with masago caviar',
        slug: 'sushi-with-masago-caviar',
        price: 1.52,
        description: '35 g Ingredients: Rice, Nori, Masago caviar, spicy sauce. Soy sauce, ginger, wasabi are not served.',
        images: ['/../public/images/products/sushi_with_masago_caviar.png']
    },
    {
        id: 2,
        name: 'Sushi with eel',
        slug: 'sushi-with-eel',
        price: 1.52,
        description: '30 g Ingredients: Rice, Eel, Unagi sauce, Sesame, Nori. Soy sauce, ginger, wasabi are not served.”',
        images: ['/../public/images/products/sushi_with_eel.png']
    },
    {
        id: 3,
        name: 'Sushi with tuna',
        slug: 'sushi-with-tuna',
         price: 1.52,
        description: '30 g Ingredients: Rice, Salmon. Soy sauce, ginger, wasabi are not served.',
        images: ['/../public/images/products/sushi_with_tuna.png']
    },
    {
        id: 4,
        name: 'Sushi with salmon',
        slug: 'sushi-with-salmon',
        price: 1.52,
        description: '30 g Ingredients: Rice, Salmon. Soy sauce, ginger, wasabi are not served.',
        images: ['/../public/images/products/sushi_with_salmon.png']
    }
];