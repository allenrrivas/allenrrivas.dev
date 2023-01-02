import { MyImage } from "../components/Moments";

const photos = [
   {
      src: "/images/konigsteinGermany2022.jpg",
      alt: "Konigstein, Germany with my older brother and his friend.",
      width: 723,
      height: 965
   },
   {
      src: "/images/qatar2022.jpg",
      alt: "Somewhere in Qatar 2022.",
      width: 723,
      height: 965
   },
   {
      src: "/images/saudiArabia2022.jpg",
      alt: "Somewhere in Saudi Arabia 2022.",
      width: 723,
      height: 965
   },
   {
      src: "/images/ronaldoQatar2022.jpg",
      alt: "Cristiano Ronaldo vs. Uruguay, Qatar World Cup 2022.",
      width: 723,
      height: 965
   },
   {
      src: "/images/hamiltonAbuDhabiGP.jpg",
      alt: "Lewis Hamilton racing in the 2022 Abu Dhabi GP.",
      width: 723,
      height: 965
   },
   {
      src: "/images/kendrick_p1.jpg",
      alt: "Los Angeles, Sept. 16 Baby Keem and Kendrick Lamar concert with my older brother.",
      width: 723,
      height: 965
   },
   {
      src: "/images/kendrick_p2.jpg",
      alt: "Los Angeles, Sept. 16 Baby Keem and Kendrick Lamar concert with my older brother. p2",
      width: 1286,
      height: 965
   },
   {
      src: "/images/canada_p1.jpg",
      alt: "Canadian Flag in a Walmart parking lot.",
      width: 723,
      height: 965
   },
   {
      src: "/images/canada_p2.jpg",
      alt: "Downtown Hamilton, Canada.",
      width: 723,
      height: 965
   },
   {
      src: "/images/canada_p3.jpg",
      alt: "Niagra Falls, Canada.",
      width: 1286,
      height: 965
  },
  {
      src: "/images/canada_p4.jpg",
      alt: "CN Tower, Downtown Toronto, Canada.",
      width: 723,
      height: 965
   },
   {
      src: "/images/lbgp2021_p1.jpg",
      alt: "IMSA at Long Beach GP 2022.",
      width: 1286,
      height: 965
  },
  {
      src: "/images/lbgp2021_p2.jpg",
      alt: "IMSA at Long Beach GP 2022. p2",
      width: 723,
      height: 965
   }
];

const MomentsPage = () => {
   return (
      <>
         <h1 className="mx-auto flex items-center justify-start capitalize font-bold text-4xl lg:w-3/6 2xl:w-2/6 w-4/6 m-4">
         Gallery
         </h1>

            {photos.map((img) => {
            return (
               <div key={img.src.split(".")[0]} className="pb-12 mx-auto flex items-center justify-start lg:w-3/6 2xl:w-2/6 w-4/6">
                  <MyImage src={`${img.src}`} alt={img.alt} height={img.height} width={img.width}/>
               </div>
            );
         })} 
      </>      
   );
      
};

export default MomentsPage;
