const products = [
    {
        id:'1',
        name: 'iphone 12',
        price: '15000',
        category: 'celular',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-2-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129021500',
        stock: 30,
        description: 'Pantalla Súper Retina XDRnota, Sistema de doble cámara',
        
    },
    {
        id:'2',
        name: 'Motorola E13',
        price: '10000',
        category: 'celular',
        img: 'https://armoto.vtexassets.com/arquivos/moto-e13-pdp-ecom-render-tofu.png',
        stock: 30,
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5 ,Batería duradera de 5000 mAh,Sistema de cámaras con IA"
    },
    {
        id:'3',
        name: 'Samsung A53',
        price: '25000',
        category: 'celular',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/2202/feature/ar-feature---531544794?$FB_TYPE_A_JPG$',
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara, Batería que dura 2 días,Resistente al agua y al polvo"
    },
    {
        id:'4',
        name: 'iphone 12',
        price: '15000',
        category: 'celular',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-2-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129021500',
        stock: 30,
        description: 'Pantalla Súper Retina XDRnota, Sistema de doble cámara',
        
    },
    {
        id:'5',
        name: 'Motorola E13',
        price: '10000',
        category: 'celular',
        img: 'https://armoto.vtexassets.com/arquivos/moto-e13-pdp-ecom-render-tofu.png',
        stock: 30,
        description: "Audio Dolby Atmos®1 y pantalla HD+ de 6.5 ,Batería duradera de 5000 mAh,Sistema de cámaras con IA"
    },
    {
        id:'6',
        name: 'Samsung A53',
        price: '25000',
        category: 'celular',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/2202/feature/ar-feature---531544794?$FB_TYPE_A_JPG$',
        stock: 30,
        description: "Pantalla 120Hz FHD+ sAMOLED, 64MP OIS Cámara, Batería que dura 2 días,Resistente al agua y al polvo"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve (products)
        }, 1000)
    })
}