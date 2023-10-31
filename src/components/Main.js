import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Portada from "./Portada";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Main() {

  const [video, setVideo] = useState(false);

  const verVideo = () => {
    setVideo(true)
  }

  return (
    <section className="text-gray-600 body-font">

      <Portada />


      <section>
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full items-center mb-4 text-center">
            <img
              src="/images/boletika_largo.png"
              alt="Google Logo"
              className="object-contain md:w-2/4 "
            ></img>
            <h1 className="mt-8 text-3xl md:text-5xl Avenir font-semibold azul w-full md:w-3/4">
              Comienza a vender tus boletos de
              manera eficiente y segura
            </h1>
          </div>
        </div>
      </section>

      <div class="w-11/12 md:w-3/4 h-1 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-300"> </div>

      <div className="flex-wrap mb-10 max-w-7xl pt-20 mx-auto text-center p-10 items-center justify-center hidden md:flex">

        <div className="flex-1">
          <div className="aspect-w-16 aspect-h-9 relative">
            <div className={`w-full h-full bg-zinc-950 bg-opacity-70 absolute
          flex flex-col items-center justify-between p-6 md:p-10
          cursor-pointer ${video ? "hidden" : ""} z-10`}
              onClick={verVideo}
            >
              <h2 className="w-100 text-3xl md:text-4xl xl:text-5xl Avenir font-semibold text-cyan-50 Sono text-center">
                Mira nuestro video para
                saber por qué Boletika...
              </h2>
              <FontAwesomeIcon icon={faPlayCircle} className="text-white w-32 md:w-24" />
              <h2 className="w-100 text-3xl md:text-4xl xl:text-5xl Avenir font-semibold text-cyan-50 Sono">
                Es la solución perfecta para tu evento
              </h2>
            </div>
            <iframe
              src={`${video ? `https://www.youtube.com/embed/Dg6YyPM4nkM?autoplay=1` : "https://www.youtube.com/embed/Dg6YyPM4nkM?autoplay=1?loop=1&mute=1"}`}
              title="YouTube video player"
              frameborder="0"
            >
            </iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-w-7xl mb-10 mx-auto text-center p-6 items-center justify-center sm:block md:hidden">

        <h2 className="w-100 text-3xl md:text-4xl xl:text-5xl Avenir font-semibold azul Sono text-center mb-5">
          Mira nuestro video para
          saber por qué Boletika...
        </h2>

        <div className="flex-1">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe
              src={`${video ? `https://www.youtube.com/embed/Dg6YyPM4nkM?autoplay=1` : "https://www.youtube.com/embed/Dg6YyPM4nkM?autoplay=1?loop=1&mute=1"}`}
              title="YouTube video player"
              frameborder="0"
            >
            </iframe>
          </div>
        </div>

        <h2 className="w-100 text-3xl md:text-4xl xl:text-5xl Avenir font-semibold azul Sono mt-5">
          Es la solución perfecta para tu evento
        </h2>
      </div>


      <div class="w-11/12 md:w-3/4 h-1 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-300"> </div>

      <div className="flex flex-col flex-wrap max-w-7xl mb-10 mx-auto text-center p-6">

        <h2 className="pl-5 w-100 text-3xl md:text-4xl xl:text-5xl Avenir font-semibold text-gray-700 text-left">
          Te ofrecemos...
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-5 md:grid-rows-3 gap-8 h-screen mt-6">

          <div class="col-span-1 row-span-1 flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_email.png"
              alt="TiktecLogo"
              className="block object-contain  h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Boletos por Email</p>
          </div>

          <div class="col-span-1 row-span-1  flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_boleto.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Boleto numerado</p>
          </div>

          <div class="col-span-1 row-span-1  flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_personalizacion.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Personalización</p>
          </div>

          <div class="col-span-1 row-span-1  flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_constancias.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Constancias</p>
          </div>

          <div class="col-span-1 row-span-1 flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_escaner.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Escáner de QR</p>
          </div>

          <div class="col-span-1 row-span-1 flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_qr.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Boletos QR</p>
          </div>

          <div class="col-span-1 row-span-1 flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_estadisticas.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Estadisticas en tiempo real</p>
          </div>

          <div class="col-span-1 row-span-1 flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_puntos.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Puntos de Venta</p>
          </div>

          <div class="col-span-1 row-span-1 flex flex-col items-center justify-center
          gap-4 p-6">
            <img
              src="/images/icons/icon_rifas.png"
              alt="TiktecLogo"
              className="block object-contain h-3/4 md:h-2/4 "
            ></img>
            <p className="text-xl md:text-2xl font-semibold">Gestión para rifas</p>
          </div>


        </div>


      </div>

      <div class="w-11/12 md:w-3/4 h-1 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-300"> </div>

      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full items-center mb-4 text-center">
            <h2 className="mb-8 text-5xl Avenir font-semibold azul">
              Validaciones
            </h2>
          </div>

          <div className="grid gap-16 text-center xl:grid-cols-4 md:grid-cols-2">
            <a href="https://www.tiktec.fun" className="flex items-center justify-center">
              <img
                src="/images/Tiktec-Logo.png"
                alt="TiktecLogo"
                className="block object-contain greyC h-36 md:h-2/4 "
              ></img>
            </a>
            <a href="" className="flex items-center justify-center">
              <img
                src="/images/logo_simposio.png"
                alt="Google Logo"
                className="block object-contain greyC h-40 md:h-2/4 "
              ></img>
            </a>
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid027hhsujELwgXvDeS84qsAckyoFqmPpdpCdqmm8NzQVQ8gnQncoCM7zyafrL5M3dMal&id=100003123379282" className="flex items-center justify-center">
              <img
                src="/images/logo_inspirando.jpg"
                alt="TiktecLogo"
                className="block object-contain greyC h-36 md:h-2/4 "
              ></img>
            </a>
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid027hhsujELwgXvDeS84qsAckyoFqmPpdpCdqmm8NzQVQ8gnQncoCM7zyafrL5M3dMal&id=100003123379282" className="flex items-center justify-center">
              <img
                src="/images/logo_cienciapaz.png"
                alt="TiktecLogo"
                className="block object-contain greyC h-36 md:h-2/4 "
              ></img>
            </a>
          </div>
        </div>

      </section>

      <div class="w-11/12 md:w-3/4 h-1 mx-auto my-10 bg-gray-100 border-0 rounded dark:bg-gray-300"> </div>



      <div className="grr max-w-7xl mx-auto text-center p-10">
        <div className="flex flex-col items-center md:flex-row gap-10 mx-auto w-fit mb-10 ">
          <FontAwesomeIcon icon={faCloud} className="azul w-32 md:w-20" />
          <h2 className="text-5xl Avenir font-semibold azul">
            Totalmente en la nube
          </h2>
        </div>
        <h3 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          Todos los boletos son digitales y se pueden presentar en tu celular en la entrada del evento.
        </h3>

        <h2 className="text-5xl Avenir font-semibold azul my-10">
            Galeria de Fotos
        </h2>


        <div className="container w-full flex flex-col items-center justify-center mx-auto rounded-lg md:w-1/2">
          <Carousel width="100%" swipeable={false} showThumbs={false}>
          <div className="h-full">
              <img src="/images/carousel/proeventos.jpg" className="h-full object-cover"/>
            </div>
            <div className="h-full">
              <img src="/images/carousel/Ciencia.jpeg" className="h-full object-cover" />
            </div>
            <div className="h-full">
              <img src="/images/carousel/Simposio.jpeg" className="h-full object-cover" />
            </div>
            <div className="h-full">
              <img src="/images/carousel/Estudiantes.jpeg" className="h-full object-cover"/>
            </div>
            <div className="h-full">
              <img src="/images/carousel/tiktec.jpeg" className="h-full object-cover"/>
            </div>
          </Carousel>
        </div>
      </div>


    </section>
  );
}
