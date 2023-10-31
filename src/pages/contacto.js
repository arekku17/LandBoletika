import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import React from 'react'

function Contacto() {
  return (
    <div className="text-black">
      <Head>
        <title>Boletika | Contacto</title>
        <link rel="icon" href="/images/boletika-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <section className="text-gray-600 body-font mb-52 w-full">
        <div className='flex flex-col md:flex-row m-auto mt-32 w-full p-5 items-center md:w-full xl:w-1/2 justify-between'>
          <img src="/images/boleto_boletika.png" className="w-96 md:w-1/2 object-cover" />
          <div>
            <h1 className='text-5xl text-center mt-10 azul font-bold mb-10'>CONTÁCTANOS</h1>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-5'>
                <FontAwesomeIcon icon={faPhone} className='w-10' />
                <p className='text-2xl md:text-3xl font-bold'>+52 982 184 5028</p>
              </div>
              <div className='flex items-center gap-5'>
                <FontAwesomeIcon icon={faEnvelope} className='w-10' />
                <p className='text-2xl md:text-3xl font-bold'>ventas@boletika.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto;

