import ImageSlider from "./imageslider.jsx";
export default function Saree() {
    const sareeList = [
        {
            id:1,
            name:" Royal Kumkum Kanakavalli Kanchipuram Silk Saree",
            price: 57484,
            image: [
                "https://i.pinimg.com/736x/99/ff/e7/99ffe7f1944c357be1b65cefde4c9e42.jpg",
                "https://i.pinimg.com/736x/b4/92/e6/b492e66bad732847185ee17e9d4ddc31.jpg",
                "https://i.pinimg.com/736x/2d/82/cf/2d82cfa13773f67874535cc37356f23d.jpg"
            ]
        },
        {
            id:2,
            name:"Maharani Bottle Green Kanchipuram Silk Saree",
            price:89809,
            image:[
                "https://i.pinimg.com/736x/99/54/a6/9954a6ccffe52f6d8844d54ab9fbd8bd.jpg",
                "https://i.pinimg.com/736x/97/fd/27/97fd2749817513ff0f8e022e07c2364b.jpg",
                "https://i.pinimg.com/1200x/e1/52/ba/e152ba83c403b77ff5eab4a65282a425.jpg"
            ]
        },
        {
            id:3,
            name:"Panchali Pink Kanchipuram Silk Saree",
            price:30534,
            image:[
                "https://i.pinimg.com/1200x/ea/0a/49/ea0a494e0e7e61a84cf3ec1520b7bec9.jpg",
                "https://i.pinimg.com/1200x/0e/5c/f3/0e5cf3ae69c7710225f11055fd47e611.jpg",
                "https://i.pinimg.com/736x/ab/71/11/ab711105e94f9c1f740c0c94230b80b3.jpg"
            ]
        },
        {
            id:4,
            name:"Kesarika Temple Orange Kanchipuram Silk Saree",
            price:  89999,
            image:  [
                "https://i.pinimg.com/736x/db/ea/bb/dbeabb3541021b9368fe843623f53143.jpg",
                "https://i.pinimg.com/736x/b5/d7/1b/b5d71b9c23b056f3773f7ab147532cd5.jpg",
                "https://i.pinimg.com/736x/09/b5/f0/09b5f073489714fa539f3641636afd30.jpg"
            ]             
        },
        {
            id:5,
            name:"Remanika violet Banarasi Silk Saree",
            price:  88969,
            image:  [
                "https://i.pinimg.com/736x/b1/ed/1e/b1ed1e3034fa2d3cbdeff9c59154ae04.jpg",
                "https://i.pinimg.com/736x/17/d6/26/17d62673f402bd5262cafab3a015ff0e.jpg",
                "https://i.pinimg.com/736x/09/b5/f0/09b5f073489714fa539f3641636afd30.jpg"
            ]             
        },
        {
            id:6,
            name:"Nitya Bright Red Banarasi Silk Saree",
            price:  67909,
            image:  [
                "https://i.pinimg.com/736x/b1/a6/76/b1a6760b17ec8196bfc7d44ed3f9e9e4.jpg",
                "https://i.pinimg.com/736x/17/d6/26/17d62673f402bd5262cafab3a015ff0e.jpg",
                "https://i.pinimg.com/736x/09/b5/f0/09b5f073489714fa539f3641636afd30.jpg"
            ]             
        },
         {
            id:7,
            name:"Badra OliveGreen Banarasi Silk Saree",
            price:  75909,
            image:  [
                "https://i.pinimg.com/736x/b4/cf/3f/b4cf3f025096a6dfdf02ae2507b20c7d.jpg",
                "https://i.pinimg.com/736x/1d/dd/9d/1ddd9d5b063359708886e3fd27a11a8b.jpg",
                "https://i.pinimg.com/736x/01/68/f7/0168f7e33cfdad183350d3e97e610148.jpg"
            ]             
        },
                 {
            id:8,
            name:"Swarna Darkgolden Chiffon Silk Saree ",
            price:  57687,
            image:  [
                "https://i.pinimg.com/736x/e8/04/94/e80494be1c5c5cb97afcf037b290af2b.jpg",
                "https://i.pinimg.com/736x/bc/51/b6/bc51b60fae2f2e59fa022941f36b7e51.jpg",
                "https://i.pinimg.com/1200x/8c/ce/16/8cce16c033e3c9dfb85b6ce2e6856bad.jpg",
                "https://i.pinimg.com/736x/d3/20/87/d320871cbd9bdf718816c3f9cb8a79d1.jpg"
            ]             
        }

    ];
    return(
        <>
        <div className="w-full bg-white text-gray-800">
            <section className="max-w-7xl mx-auto px-6 pt-10 pb-4"> 
                <h1 className="text-3xl font-bold tracking-wide">Saree Collection</h1>
                <p className="text-gray-500 mt-2">Explore our curated selection of elegant bridal sarees for every brides</p>
            </section>
         <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-xl font-semibold mb-6 ">Sarees for you..</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {sareeList.map((item)=>(
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