import ImageSlider from "./imageslider.jsx";
export default function Bestseller() {
    const bestsellerList = [
        {
            id:1,
            name:"  Dusty Lavender Royal Bridal Lehenga",
            price: 57484,
            image: [
                
                "https://i.pinimg.com/736x/02/05/39/020539606de799eb645935ac75d573a6.jpg",
                "https://i.pinimg.com/1200x/fc/b2/8e/fcb28e3ff38c3c386dddbe7850b894e2.jpg",
                "https://i.pinimg.com/736x/05/cb/2a/05cb2a824fa78fffe6e2203d5454fd56.jpg"
            ]
        },
        {
            id:2,
            name:"Emerald Green Kundan Bridal Jewellery Set",
            price:89809,
            image:[
                "https://i.pinimg.com/1200x/28/00/ef/2800ef7b1be2e5390c09ba30e9d959b3.jpg",
                "https://i.pinimg.com/1200x/df/a6/42/dfa642e602329c68994775dfc16f2161.jpg",
                "https://i.pinimg.com/736x/f1/ff/24/f1ff24e2d3cc7d49dfe6dcc8ff56ddb5.jpg"
            ]
        },
        {
            id:3,
            name:"Panchali Pink Kanchipuram Silk Saree",
            price:30534,
            image:[
                "https://i.pinimg.com/1200x/ea/0a/49/ea0a494e0e7e61a84cf3ec1520b7bec9.jpg",
                "https://i.pinimg.com/474x/04/1e/ea/041eea3ad80b76572a89e889f3db8261.jpg",
                "https://i.pinimg.com/736x/fe/c0/ab/fec0aba073e077f1ae0fd0fb91c7c210.jpg"
            ]
        },
        {
            id:4,
            name:"Kerala Temple Jewellery Set",
            price:  89999,
            image:  [
                "https://i.pinimg.com/1200x/05/31/ae/0531ae0436af43bbe232e7eeb8e4cb20.jpg",
                "https://i.pinimg.com/1200x/1f/31/e0/1f31e0a8e0c0d9614f6b3bd571542331.jpg",
                "https://i.pinimg.com/1200x/c2/e7/3b/c2e73bb2df756d5478f3058624f80da0.jpg"
            ]             
        }
    ];
    return(
        <>
        <div className="w-full bg-white text-gray-800">
            <section className="max-w-7xl mx-auto px-6 pt-10 pb-4"> 
                <h1 className="text-3xl font-bold tracking-wide">Best Sellers</h1>
                <p className="text-gray-500 mt-2">Explore our best selling products - Grab them now</p>
            </section>
         <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-xl font-semibold mb-6 ">Find Yours</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {bestsellerList.map((item)=>(
                    <div 
                    key={item.id}
                    className="shadow-md hover:shadow-xl rounded"> 
                    <ImageSlider images={item.image}/>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-gray-500 ">₹{item.price}</p>
                        <button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-red-800 transition">Add to cart</button>
                    </div>
                    </div>

                ))}

            </div>

         </section>
        </div>
        </>
    )
}