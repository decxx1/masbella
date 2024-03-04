import { useStore } from '@nanostores/react';
import { isModalPoliticsOpen } from '@/services/store';

export default function ModalPolitics() {
    const isOpen = useStore(isModalPoliticsOpen);
    const handleCloseModal = () => {
        isModalPoliticsOpen.set(false);
    }
    return(
        <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Información básica sobre Protección de datos</h4>
                        <button type="button" className="close" onClick={handleCloseModal}>
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default w-100" onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}