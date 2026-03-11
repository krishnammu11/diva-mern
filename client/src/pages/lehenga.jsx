import ImageSlider from "./imageslider.jsx";
export default function Lehenga() {
    const lehengaList = [
        {
            id:1,
            name:" Dusty Lavender Royal Bridal Lehenga",
            price: 57484,
            image: [
                "https://i.pinimg.com/736x/ec/db/ef/ecdbefb06ee8d10bae40ac24f3ba7b8b.jpg",
                "https://i.pinimg.com/736x/02/05/39/020539606de799eb645935ac75d573a6.jpg",
                "https://i.pinimg.com/1200x/fc/b2/8e/fcb28e3ff38c3c386dddbe7850b894e2.jpg"
            ]
        },
        {
            id:2,
            name:"Hot Red Heavy Bridal Lehenga",
            price:89809,
            image:[
                "https://i.pinimg.com/736x/21/fb/76/21fb7621268fab4b1b1ab43baa0f558e.jpg",
                "https://i.pinimg.com/1200x/df/a6/42/dfa642e602329c68994775dfc16f2161.jpg",
                "https://i.pinimg.com/736x/f1/ff/24/f1ff24e2d3cc7d49dfe6dcc8ff56ddb5.jpg"
            ]
        },
        {
            id:3,
            name:"Pakistani Green Bridal Lehenga",
            price:30534,
            image:[
                "http://i.pinimg.com/1200x/60/25/09/60250995c1e7a76bb04f846cdfd84267.jpg",
                "https://i.pinimg.com/474x/04/1e/ea/041eea3ad80b76572a89e889f3db8261.jpg",
                "https://i.pinimg.com/736x/fe/c0/ab/fec0aba073e077f1ae0fd0fb91c7c210.jpg"
            ]
        },
        {
            id:4,
            name:"Kesarika Orange Bridal Lehenga",
            price:  89999,
            image:  [
                "https://i.pinimg.com/736x/bf/1d/e3/bf1de3b27bf1a279ea322d09667a105f.jpg",
                "https://i.pinimg.com/1200x/1f/31/e0/1f31e0a8e0c0d9614f6b3bd571542331.jpg",
                "https://i.pinimg.com/1200x/c2/e7/3b/c2e73bb2df756d5478f3058624f80da0.jpg"
            ]             
        },
         {
            id:5,
            name:"Remanika Heavy Work Pink Bridal Lehenga",
            price:  256789,
            image:  [
                "https://i.pinimg.com/736x/6c/a9/f1/6ca9f1f64ecb5c211b3968f9bc440fd9.jpg",
                "https://i.pinimg.com/736x/b5/4e/80/b54e803a290e5208cc533a24dabe8d9f.jpg",
                "https://i.pinimg.com/736x/73/bd/f8/73bdf826c8aa0d6674694fdd6a4021c0.jpg",
                "https://i.pinimg.com/736x/3e/08/f9/3e08f99bea7efc290298e6ee58d1088a.jpg"
            ]             
        },
        {
            id:6,
            name:"Nitya Blue&golden Bridal Lehenga",
            price:  145237,
            image:  [
                "https://i.pinimg.com/736x/a3/8e/e2/a38ee2a86d2778e7d0ab3ba4792172f6.jpg",
                "https://i.pinimg.com/736x/e1/e3/b8/e1e3b898955db6f618fcd4b004784b86.jpg",
                "https://i.pinimg.com/736x/6e/c5/86/6ec5868c9041b54f9268d531cac370a4.jpg",
                "https://i.pinimg.com/1200x/52/b9/b5/52b9b5efec413f7585e7f386a7bf69fa.jpg"

            ]             
        },
         {
            id:7,
            name:"Nitara Multicolor Bridal Lehenga",
            price:  235909,
            image:  [
                "https://i.pinimg.com/1200x/43/4b/84/434b841666f700807e0d389af8eb74b5.jpg",
                "https://i.pinimg.com/736x/49/90/67/4990670186afe96699f23d93531179db.jpg",
                "https://i.pinimg.com/1200x/27/ec/de/27ecde5af28cadde130ae6976886c3f5.jpg",
                "https://i.pinimg.com/1200x/d1/bb/ec/d1bbec2d3808b5c03a24ac9bc7c4cd15.jpg"
            ]             
        },
                 {
            id:8,
            name:"Raga Dark Colour Bridal Lehenga",
            price:  90687,
            image:  [
                "https://i.pinimg.com/736x/b1/08/85/b108854cb720c565fc1e8d7c76e74256.jpg",
                "https://i.pinimg.com/736x/f4/8b/fd/f48bfdba2e245ee668f1fe8eba5f3d3f.jpg",
                "https://i.pinimg.com/1200x/8c/ce/16/8cce16c033e3c9dfb85b6ce2e6856bad.jpg",
                "https://i.pinimg.com/736x/d3/20/87/d320871cbd9bdf718816c3f9cb8a79d1.jpg"
            ]             
        }

    ];
    return(
        <>
        <div className="w-full bg-white text-gray-800">
            <section className="max-w-7xl mx-auto px-6 pt-10 pb-4"> 
                <h1 className="text-3xl font-bold tracking-wide">Bridal Lehengas</h1>
                <p className="text-gray-500 mt-2">Every bride deserves a masterpiece. Explore bridal lehengas intricately woven with love, heritage, and timeless artistry to make your wedding moments magical.</p>
            </section>
         <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-xl font-semibold mb-6 ">For the Bride Who Deserves to Shine</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {lehengaList.map((item)=>(
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