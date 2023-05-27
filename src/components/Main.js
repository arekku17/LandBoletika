import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Typewriter from 'typewriter-effect';
import { motion, animationControls, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";


export default function Main() {
  const scrollRef = useRef(null)

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  const introHeaderVariants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
    offscreen: {
      y: 300
    },
  }

  const introPictureVariants = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
    offscreen: {
      y: 300
    },
  };


  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:p-24">
        <div className="lg:flex-grow
        md:w-1/2
        pt-6 flex
        flex-col md:items-start md:text-left mb-20 items-center text-center">
          <motion.h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900 azul"
            ref={ref}
            variants={introHeaderVariants}
            initial="hide"
            animate={control}
            viewport={{ once: true }}
          >
            <Typewriter
              options={{
                strings: ['Boletikate y Accesa', 'El poder de los QR'],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <motion.p className="mb-4 xl:w-3/4 text-gray-600 text-lg"
            ref={ref}
            variants={introHeaderVariants}
            initial="hide"
            animate={control}
            viewport={{ once: true }}
          >
            App web para administrar y vender boletos QR con funciones
            útiles para poder potencializar su evento
          </motion.p>
          <motion.div className="flex justify-center"
            ref={ref}
            variants={introHeaderVariants}
            initial="hide"
            animate={control}
            viewport={{ once: true }}
          >
            <a
              className="inline-flex
              items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out
              transform bg-transparent border rounded-lg button"
              href="https://app.boletika.com"
            >
              <span className="justify-center">Ir a la App</span>
            </a>
          </motion.div>
        </div>
        <motion.div className="xl:mr-20 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 items-center text-center"
          ref={ref}
          variants={introPictureVariants}
          initial="hide"
          animate={control}
          viewport={{ once: true }}
        >
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/iPhone-12-Mockup.png"
          ></img>
        </motion.div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-5xl Avenir font-semibold azul">
              Probado en el evento de
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-16 text-center lg:grid-cols-1">
            <a href="https://www.tiktec.fun" className="flex items-center justify-center">
              <img
                src="/images/Tiktec-Logo.png"
                alt="Google Logo"
                className="block object-contain greyC md:h-2/4 "
              ></img>
            </a>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center p-10">
        <h1 className="mb-8 text-5xl Avenir font-semibold azul">
          Totalmente digital
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          Todos los boletos son digitales y se pueden presentar en tu celular en la entrada del evento
        </h1>


        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg md:w-1/2">
          <Carousel width="100%">
            <div>
              <img src="/images/carousel/cuadro.png" />
            </div>
            <div>
              <img src="/images/carousel/cuadro2.png" />
            </div>
            <div>
              <img src="/images/carousel/cuadro3.png" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
