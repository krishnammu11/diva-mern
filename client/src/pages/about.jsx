export default function About() {
    return(
        <>
        <div className="w-full bg-white text-gray-800">
            <section className="relative h-[60vh] w-full">
                <img src="https://i.pinimg.com/1200x/d0/c4/88/d0c4889d92ce6250d5cdd7f833156013.jpg" 
                alt="about banner" 
                className="w-full h-full object-cover opacity-80"/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
            Celebrating elegance, culture, and traditon crafted with modernity for every bride.
          </p>
        </div>
            </section>

            <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-red-900">
          Our Story
        </h2>
        <p className="leading-relaxed text-lg text-gray-700">
          Welcome to <strong>Diva</strong>, a brand born from a passion for timeless 
          Indian fashion. We believe clothing is not just fabric,it's expression, confidence, 
          and identity. Our collection celebrates the beauty of tradition blended with the 
          comfort of modern design.
        </p>

        <p className="leading-relaxed text-lg text-gray-700 mt-6">
          Every saree, kurti, and ethnic outfit is thoughtfully curated to bring you 
          quality craftsmanship, premium fabrics, and styles that make you feel effortlessly 
          elegant. We work closely with artisans and trusted manufacturers to ensure that 
          every piece tells a story.
        </p>

        <p className="leading-relaxed text-lg text-gray-700 mt-6">
          At Diva, our mission is simple- 
          <span className="font-medium">to make every woman look and feel extraordinary.</span>
        </p>
      </section>
       <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-red-900">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To create a fashion space where Indian craftsmanship meets affordable luxury, 
              inspiring confidence and beauty in every woman.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-red-900">Our Values</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Authentic fabric & quality workmanship</li>
              <li>• Designs that blend tradition & modern style</li>
              <li>• Ethical sourcing & artisan support</li>
              <li>• Customer-first experience</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">Thank You for Being Here</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We’re grateful to be a part of your fashion journey. Designed especially for your most cherished moments, 
          our collection of traditional lehengas, sarees, and jewellery is crafted to make every celebration unforgettable.
           We’re committed to making your special-occasion experience truly memorable
        </p>
      </section>

        </div>
        </>
    )
}