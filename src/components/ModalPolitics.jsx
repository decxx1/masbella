import { useStore } from '@nanostores/react';
import { isModalPoliticsOpen } from '@/services/store';

export default function ModalPolitics() {
    const isOpen = useStore(isModalPoliticsOpen);
    const handleCloseModal = () => {
        isModalPoliticsOpen.set(false);
    }
    return(
        <>
        <div className={`${isOpen ? 'block' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[998] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`} >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h4 className="text-xl font-semibold text-gray-900">Información básica sobre Protección de datos</h4>
                       
                        <button
                            onClick={handleCloseModal} 
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p>De acuerdo con lo establecido por el Reglamento (UE) 2016/679 del Parlamento
                        Europeo y del Consejo, y de la Ley 3/2018 de Protección de Datos Personales y
                        Garantías de los Derechos Digitales, le informamos que los datos personales aportados
                        serán tratados por MÓNICA GÓMEZ VITALI, con domicilio en C/ Nuestra Señora del
                        Carmen 2, 29740 Torre Del Mar, Málaga (España).</p>
                        <p>Los datos aportados por usted son necesarios para atender su solicitud.</p>
                        <p>La legitimación del Responsable del Tratamiento para realizar el tratamiento de sus
                        datos es: Ejecución de un contrato: Gestión de potenciales clientes que se han interesado
                        sobre nuestros productos y/o servicios. (RGPD, art. 6.1.b, LSSICE art.21). Interés
                        legítimo del Responsable: Gestión de los datos de contacto profesionales (LOPDGDD
                        art.19, RGPD art. 6.1.f).</p>
                        <p>Sobre los destinatarios de los datos, no se cederán datos a terceros, salvo obligación
                        legal.</p>
                        <p>Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos,
                        indicados en la información adicional, que puede ejercer dirigiéndose a
                        privacidad@masbellamedical.com o C/ Francisco Guerra 12 Portal 4 1ºC, 06011
                        Badajoz (España).</p>
                        <p>Los datos proceden del propio interesado.</p>
                        <p>Puede consultar información adicional y detallada sobre Protección de Datos aquí:<br/>
                        <a target="_blank" href="./politica-privacidad">Política de privacidad</a></p>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button type="button" className="w-full py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={`${isOpen ? 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-[997]' : 'hidden'}`} ></div>
        </>
    )
}