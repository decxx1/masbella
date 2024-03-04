import { Toaster, toast } from 'sonner'
import { OpenModalPolitics } from '@/components/OpenModalPolitics'
import { useState } from 'react'
import axios from 'axios';

export default function FranchiseForm() {
    const [isSending, setIsSending] = useState(false);
    const resetForm = () => {
        document.getElementById('franchiseForm').reset();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const fields = Object.fromEntries(new window.FormData(event.target))
        if(!isSending){
            setIsSending(true);
            grecaptcha.ready(function() {
                grecaptcha.execute('6Ld3kmckAAAAAIEH2AEWmw7-2LM9VYVeuqLi7RXa', { action: 'contacto' }).then(function(getToken) {
                    fields.token = getToken;
                    fields.action = 'contacto';
                    
                    sendForm(fields);
                });
            });
        }
    }
    const sendForm = (fields) => {
        axios.post('https://masbellamedical.com/api.php', fields, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            toast.success('Tu mensaje fue enviado correctamente')
            resetForm()
        })
        .catch(error => {
            console.error(error)
            toast.error('No se pudo enviar el mensaje vuelva a intentarlo más tarde.')
        })
        .finally(() => {
            setIsSending(false);
        })
    }
    return (
        <section >
            <Toaster richColors position="bottom-right" />
            <div className="container d-flex justify-content-center">
                <div className="card" 
                    style={{ 
                        maxWidth: '700px',
                        border: 'inherit !important',
                        boxShadow: '0px 5px 15px rgba(0,61,85,0.1)',
                     }}>
                    <div className="card-header bg-light"
                        style={{ 
                            borderBottom: 'inherit !important',
                            padding: '40px 0px',
                        }}
                    >
                        <h3 className="text-center color-primary font-weight-bold">Rellena el formulario para que nos pongamos en contacto.</h3>
                    </div>
                    <div className="card-body">
                        <form id="franchiseForm" method="post" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">Nombre*</label>
                                    <input name="name" className="form-control" type="text" placeholder="Nombre" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">Apellido*</label>
                                    <input name="apellido" className="form-control" type="text" placeholder="Apellido" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">teléfono *</label>
                                    <input name="telphone" className="form-control" type="tel" placeholder="Teléfono" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">E-mail*</label>
                                    <input name="email" className="form-control" type="email" placeholder="E-mail" required/>
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="form-label color-primary">Dirección</label>
                                    <input name="direccion" className="form-control" type="text" placeholder="Dirección" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">Ciudad</label>
                                    <input name="ciudad" className="form-control" type="text" placeholder="Ciudad" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">Estado/Provincia/Región</label>
                                    <input name="estado" className="form-control" type="text" placeholder="Estado/Provincia/Región" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">Código Postal</label>
                                    <input name="codigo_postal" className="form-control" type="text" placeholder="Código Postal" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">Pais</label>
                                    <input name="pais" type="text" className="form-control" defaultValue="España" placeholder="País" required/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">¿Ha trabajado en una franquicia alguna vez?</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="Si" name="consulta1_1" id="consulta1_1" required/>
                                        <label className="form-check-label" htmlFor="consulta1_1">
                                            Si
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="No" name="consulta1_1" id="consulta1_2" required/>
                                        <label className="form-check-label" htmlFor="consulta1_2">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">¿en qué sector?</label>
                                    <input name="sector" type="text" className="form-control" />
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">¿Tiene conocimientos en Depilación Láser o Estética?</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="Si" name="consulta2_1" id="consulta2_1" required />
                                        <label className="form-check-label" htmlFor="consulta2_1">
                                            Si
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="No" name="consulta2_1" id="consulta2_2" required />
                                        <label className="form-check-label" htmlFor="consulta2_2">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <label className="form-label color-primary">¿Tiene experiencia en:</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="1" name="estetica" id="estetica"/>
                                        <label className="form-check-label" htmlFor="estetica">
                                            Estética
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="1" name="depilacion_laser" id="depilacion_laser"/>
                                        <label className="form-check-label" htmlFor="depilacion_laser">
                                            Depilación Láser
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="1" name="cuidado_personal" id="cuidado_personal"/>
                                        <label className="form-check-label" htmlFor="cuidado_personal">
                                            Cuidado Personal
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="1" name="fotodepilacion" id="fotodepilacion"/>
                                        <label className="form-check-label" htmlFor="fotodepilacion">
                                            Fotodepilación
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="1" name="luz_pulsada" id="luz_pulsada"/>
                                        <label className="form-check-label" htmlFor="luz_pulsada">
                                            Luz Pulsada
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="form-label color-primary">¿Cómo nos conoció?</label>
                                    <input name="conocio" className="form-control" type="text" required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="form-label color-primary">¿En qué zona geográfica desea ubicar su centro?</label>
                                    <input name="ubicar_centro" className="form-control" type="text" required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="form-label color-primary">¿En qué día y horario nos podemos comunicar con usted?</label>
                                    <input name="comunicar" className="form-control" type="text" required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label  className="form-label color-primary">Consulta</label>
                                    <textarea name="consulta_extra" className="form-control" rows="3"></textarea>
                                </div>
                                
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" name="politicas" type="checkbox" value="" id="flexCheckDefault" required />
                                <label className="form-check-label" htmlFor="flexCheckDefault" >
                                    He leído y acepto la <OpenModalPolitics /> y <a target="_blank" className="link-politica" href="./politica-privacidad">Políticas
                                    de Privacidad</a>
                                </label>
                            </div>
                            <button disabled={isSending} type="submit" className="site-btn w-100">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}