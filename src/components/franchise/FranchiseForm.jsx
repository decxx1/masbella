import { Toaster, toast } from 'sonner'
import { OpenModalPolitics } from '@/components/OpenModalPolitics'
import { useState } from 'react'
import axios from 'axios';
import { endPoint, secretKey } from '@/services/enviroment.js';

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
                grecaptcha.execute(secretKey, { action: 'contacto' }).then(function(getToken) {
                    fields.token = getToken;
                    fields.action = 'contacto';
                    
                    sendForm(fields);
                });
            });
        }
    }
    const sendForm = (fields) => {
        axios.post(endPoint, fields, {
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
            <div className="container mx-auto">
                <div className="card max-w-3xl mx-auto" 
                    style={{
                        boxShadow: '0px 5px 15px rgba(0,61,85,0.1)',
                     }}
                >
                    <div className="card-header bg-body-light py-10 px-4">
                        <h3 className="text-center text-primary-100 font-bold">Rellena el formulario para que nos pongamos en contacto.</h3>
                    </div>
                    <div className="card-body">
                        <form id="franchiseForm" method="post" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-12 py-5 px-3">
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Nombre*</label>
                                    <input name="name" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" placeholder="Nombre" required/>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Apellido*</label>
                                    <input name="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" placeholder="Apellido" required/>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">teléfono *</label>
                                    <input name="telphone" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="tel" placeholder="Teléfono" required/>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">E-mail*</label>
                                    <input name="email" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="email" placeholder="E-mail" required/>
                                </div>
                                <div className="col-span-12 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Dirección</label>
                                    <input name="direccion" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" placeholder="Dirección" required/>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Pais</label>
                                    <input name="pais" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" defaultValue="España" placeholder="País" required/>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Estado/Provincia/Región</label>
                                    <input name="estado" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" placeholder="Estado/Provincia/Región" required/>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Ciudad</label>
                                    <input name="ciudad" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" placeholder="Ciudad" required/>
                                </div>
                                
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Código Postal</label>
                                    <input name="codigo_postal" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" placeholder="Código Postal" required/>
                                </div>
                                
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">¿Ha trabajado en una franquicia alguna vez?</label>
                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-pink-200 rounded-lg">
                                        <li className="w-full border-b border-pink-200 rounded-t-lg">
                                            <div className="flex items-center ps-3">
                                                <input type="radio" value="Si" name="consulta1_1" id="consulta1_1" required/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="consulta1_1">
                                                    Si
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full rounded-t-lg">
                                            <div className="flex items-center ps-3">
                                                <input type="radio" value="No" name="consulta1_1" id="consulta1_2" required/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="consulta1_2">
                                                    No
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">¿en qué sector?</label>
                                    <input name="sector" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" />
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">¿Tiene conocimientos en Depilación Láser o Estética?</label>
                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-pink-200 rounded-lg">
                                        <li className="w-full border-b border-pink-200 rounded-t-lg">
                                            <div className="flex items-center ps-3">
                                                <input className="form-check-input" type="radio" value="Si" name="consulta2_1" id="consulta2_1" required />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="consulta2_1">
                                                    Si
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full rounded-t-lg">
                                            <div className="flex items-center ps-3">
                                                <input className="form-check-input" type="radio" value="No" name="consulta2_1" id="consulta2_2" required />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="consulta2_2">
                                                    No
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-6 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">Tiene experiencia en:</label>
                                    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                                        <li class="w-full border-b border-gray-200 rounded-t-lg ">
                                            <div class="flex items-center ps-3">
                                                <input className="form-check-input" type="checkbox" value="1" name="estetica" id="estetica"/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="estetica">
                                                    Estética
                                                </label>
                                            </div>
                                        </li>
                                        <li class="w-full border-b border-gray-200 rounded-t-lg ">
                                            <div class="flex items-center ps-3">
                                                <input className="form-check-input" type="checkbox" value="1" name="depilacion_laser" id="depilacion_laser"/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="depilacion_laser">
                                                    Depilación Láser
                                                </label>
                                                </div>
                                        </li>
                                        <li class="w-full border-b border-gray-200 rounded-t-lg ">
                                            <div class="flex items-center ps-3">
                                                <input className="form-check-input" type="checkbox" value="1" name="cuidado_personal" id="cuidado_personal"/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="cuidado_personal">
                                                    Cuidado Personal
                                                </label>
                                            </div>
                                        </li>
                                        <li class="w-full border-b border-gray-200 rounded-t-lg ">
                                            <div class="flex items-center ps-3">
                                                <input className="form-check-input" type="checkbox" value="1" name="fotodepilacion" id="fotodepilacion"/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="fotodepilacion">
                                                    Fotodepilación
                                                </label>
                                            </div>
                                        </li>
                                        <li class="w-full border-b border-gray-200 rounded-t-lg ">
                                            <div class="flex items-center ps-3">
                                                <input className="form-check-input" type="checkbox" value="1" name="luz_pulsada" id="luz_pulsada"/>
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900" htmlFor="luz_pulsada">
                                                    Luz Pulsada
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">¿Cómo nos conoció?</label>
                                    <input name="conocio" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" required />
                                </div>
                                <div className="col-span-12 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">¿En qué zona geográfica desea ubicar su centro?</label>
                                    <input name="ubicar_centro" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" required />
                                </div>
                                <div className="col-span-12 mb-3 px-2">
                                    <label className="block mb-2 text-sm font-medium text-primary-100">¿En qué día y horario nos podemos comunicar con usted?</label>
                                    <input name="comunicar" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" type="text" required />
                                </div>
                                <div className="col-span-12 mb-3 px-2">
                                    <label  className="block mb-2 text-sm font-medium text-primary-100">Consulta</label>
                                    <textarea name="consulta_extra" className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:ring-primary-50 focus:border-primary-50 block w-full p-2.5" rows="3"></textarea>
                                </div>
                                
                            </div>
                            <div className="form-check ml-2 mb-2 px-2 flex">
                                <input className="form-check-input mr-3" name="politicas" type="checkbox" value="" id="flexCheckDefault" required />
                                <label className="form-check-label" htmlFor="flexCheckDefault" >
                                    He leído y acepto la <OpenModalPolitics /> y <a target="_blank" className="link-politica" href="./politica-privacidad">Políticas
                                    de Privacidad</a>
                                </label>
                            </div>
                            <div className="p-4">
                                <button disabled={isSending} type="submit" className="site-btn w-full">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}