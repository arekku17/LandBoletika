import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="text-black">
            <Head>
                <title>Boletika | Planes</title>
                <link rel="icon" ref="/images/boletika-logo.png" />
            </Head>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-12 azul">Planes mensuales</h2>

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-full">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase mb-4 text-sm text-blue-600">
                                        <strong>Básico</strong>
                                    </p>
                                    <h3 className="text-2xl mb-6">
                                        <strong>Gratis</strong>
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ol className="list-inside">
                                        <li className="mb-4 flex items-center font-bold">
                                            Por evento creado
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Un punto de venta
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Una cuenta de escaner
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-full">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase mb-4 text-sm text-blue-600">
                                        <strong>Intermedio</strong>
                                    </p>
                                    <h3 className="text-2xl mb-6 flex flex-col">
                                        <strong>$ 500</strong>
                                        <small className="text-gray-500 text-sm"> apartir de 100 boletos</small>
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ol className="list-inside">
                                        <li className="mb-4 flex items-center font-bold">
                                            Por evento creado
                                        </li>

                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>5 cuentas de Punto de Venta ($50 por cuenta adicional al plan)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>3 cuentas de Escaner ($50 por cuenta adicional al plan)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Control de Asistencias
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Estadística general por semana
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-full">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase mb-4 text-sm text-blue-600">
                                        <strong>Premium</strong>
                                    </p>
                                    <h3 className="text-2xl mb-6 flex flex-col">
                                        <strong>$ 800</strong>
                                        <small className="text-gray-500 text-sm"> apartir de 200 boletos</small>
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ol className="list-inside">
                                        <li className="mb-4 flex items-center font-bold">
                                            Por evento creado
                                        </li>

                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>10 cuentas de Punto de Venta ($50 por cuenta adicional al plan)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>5 cuentas de Escaner ($50 por cuenta adicional al plan)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Control de Asistencias
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Estadística en tiempo real y detallada
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Personalización de la imagen del boleto
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-full">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase mb-4 text-sm text-blue-600">
                                        <strong>Empresarial</strong>
                                    </p>
                                    <h3 className="text-2xl mb-6 flex flex-col">
                                        <strong>$ 3500</strong>
                                        <small className="text-gray-500 text-sm"> apartir de 1000 boletos</small>
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ol className="list-inside">
                                        <li className="mb-4 flex items-center font-bold">
                                            Por evento creado
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>30 cuentas de Punto de Venta ($50 por cuenta adicional al plan)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>10 cuentas de Escaner ($50 por cuenta adicional al plan)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Control de Asistencias
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Estadística en tiempo real y detallada
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Adaptación del uso a requerimientos del evento (Con anticipación de 1 mes)
                                        </li>
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Personalización de la imagen del boleto
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-24 text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-12 azul">Comisión en todos los planes</h2>
                </section>
                <div className="rounded-lg w-full md:w-96 h-72 shadow-lg bg-white flex flex-col items-center justify-center p-5 m-auto">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center ">
                            <h3 className="text-4xl font-bold text-blue-600 mb-3">BOLETOS</h3>
                            <p className="text-center text-gray-600">Todos los boletos vendidos llevan la misma comisión.</p>
                        </div>
                        <div className="flex items-end gap-1 relative">
                            <p className="text-8xl font-bold">3.0 </p>
                            <span className="h-fit font-bold text-4xl ml-1 absolute left-full">%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}