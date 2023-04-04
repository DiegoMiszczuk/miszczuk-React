import iphone12 from './components/Item/itemImg/iphone12.png'
import motoE13 from './components/Item/itemImg/motoE13.png'
import samsungA53 from './components/Item/itemImg/samsungA53.png'
import tabletLenovo from './components/Item/itemImg/tabletLenovo.png'
import tabletMoto from './components/Item/itemImg/tabletMotorola.png'
import tabletSamsung from './components/Item/itemImg/tabletSamsung.png'
import noteApple from './components/Item/itemImg/notebookApple.png'
import noteAcer from './components/Item/itemImg/notebookAcer.png'
import noteSamsung from './components/Item/itemImg/notebookSamsung.png'

const products = [
    {
        id:'1',
        name: 'iphone 12',
        price: '15000',
        category: 'Celulares',
        img: iphone12,
        stock: 30,
        description: 'Pantalla Súper Retina XDRnota, Sistema de doble cámara',
        
    },
    {
        id:'2',
        name: 'Motorola E13',
        price: '10000',
        category: 'Celulares',
        img: motoE13,
        stock: 30,
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5",
    },
    {
        id:'3',
        name: 'Samsung A53',
        price: '25000',
        category: 'Celulares',
        img: samsungA53,
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara"
    },
    {
        id:'4',
        name: 'Lenovo Smart Tab',
        price: '18000',
        category: 'Tablets',
        img: tabletLenovo,
        stock: 20,
        description: 'Tablet de entretenimiento de 10.3"',
        
    },
    {
        id:'5',
        name: 'Moto Tab G20',
        price: '19000',
        category:'Tablets',
        img: tabletMoto,
        stock: 15,
        description: "pantalla LCD de 8 pulgadas y resolución HD"
    },
    {
        id:'6',
        name: 'Tablet Galaxy Tab',
        price: '25000',
        category: 'Tablets',
        img: tabletSamsung,
        stock: 28,
        description: 'Visión más amplia con la pantalla inmersiva de 10.5"'
    },
    {
        id:'7',
        name: 'Samsung Galaxy Book I7 16gb',
        price: '18000',
        category: 'Notebooks',
        img: noteSamsung,
        stock: 20,
        description: 'qualcomm snapdragon 7c gen2 4gb ram 128gb ssd 14 pulg',
        
    },
    {
        id:'8',
        name: 'Notebook Acer pro 15"',
        price: '24000',
        category:'Notebooks',
        img: noteAcer,
        stock: 15,
        description: " procesador Intel® Core™ de 12.a"
    },
    {
        id:'9',
        name: 'MacBook M1 Pro 14″ ',
        price: '25000',
        category: 'Notebooks',
        img: noteApple,
        stock: 28,
        description: 'Chip M1 Pro de Apple de 8 Núcleos"'
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
