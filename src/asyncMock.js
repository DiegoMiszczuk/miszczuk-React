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
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5 ,Batería duradera de 5000 mAh,Sistema de cámaras con IA"
    },
    {
        id:'3',
        name: 'Samsung A53',
        price: '25000',
        category: 'celular',
        img: image3,
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara, Batería que dura 2 días,Resistente al agua y al polvo"
    },
    {
        id:'4',
        name: 'iphone 12',
        price: '15000',
        category: 'celular',
        img: image1,
        stock: 30,
        description: 'Pantalla Súper Retina XDRnota, Sistema de doble cámara',
        
    },
    {
        id:'5',
        name: 'Motorola E13',
        price: '10000',
        category: 'celular',
        img: image2,
        stock: 30,
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5 ,Batería duradera de 5000 mAh,Sistema de cámaras con IA"
    },
    {
        id:'6',
        name: 'Samsung A53',
        price: '25000',
        category: 'celular',
        img: image3,
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara, Batería que dura 2 días,Resistente al agua y al polvo"
    },
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve (products)
        }, 1000)
    })
}