import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion, animationControls, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Portada = () => {

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
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:p-24
        ">
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
                        href="https://wa.me/19821845028?text=Me%20interesa%20saber%20más%20sobre%20Boletika"
                    >
                        <span className="justify-center">Más información</span>
                    </a>
                </motion.div>
            </div>
            <motion.div className="flex items-center text-center w-full md:w-1/2"
                ref={ref}
                variants={introPictureVariants}
                initial="hide"
                animate={control}
                viewport={{ once: true }}
            >
                <img
                    className="w-100 md:ml-1"
                    alt="iPhone-12"
                    src="/images/iPhone-12-Mockup.png"
                ></img>
            </motion.div>
        </div>
    )
}

export default Portada