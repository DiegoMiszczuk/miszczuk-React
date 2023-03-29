import image1 from './assets/itemImg/iphone12.png'
import image2 from './assets/itemImg/motoE13.png'
import image3 from './assets/itemImg/samsungA53.png'

const products = [
    {
        id:'1',
        name: 'iphone 12',
        price: '15000',
        category: 'celular',
        img: image1,
        stock: 30,
        description: 'Pantalla Súper Retina XDRnota, Sistema de doble cámara',
        
    },
    {
        id:'2',
        name: 'Motorola E13',
        price: '10000',
        category: 'celular',
        img: image2,
        stock: 30,
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5",
    },
    {
        id:'3',
        name: 'Samsung A53',
        price: '25000',
        category: 'celular',
        img: image3,
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara"
    },
    {
        id:'4',
        name: 'iphone 12',
        price: '15000',
        category: 'tablet',
        img: image1,
        stock: 30,
        description: 'Pantalla Súper Retina XDRnota, Sistema de doble cámara',
        
    },
    {
        id:'5',
        name: 'Motorola E13',
        price: '10000',
        category: 'notebook',
        img: image2,
        stock: 30,
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5"
    },
    {
        id:'6',
        name: 'Samsung A53',
        price: '25000',
        category: 'notebook',
        img: image3,
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara"
    },
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve (products)
        }, 0)
    })
}
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 0)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },0)
    })
}
