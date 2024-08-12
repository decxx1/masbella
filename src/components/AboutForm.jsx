import { Toaster, toast } from 'sonner'
import { OpenModalPolitics } from '@/components/OpenModalPolitics'
import { useState } from 'react'
import axios from 'axios';
import { 
    secretKey,
    siteKey,
    endPoint,
    email
} from '@/services/enviroment.js';

export default function AboutForm () {
    const [isSending, setIsSending] = useState(false);
    const resetForm = () => {
        document.getElementById('aboutForm').reset();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const fields = Object.fromEntries(new window.FormData(event.target))
        fields.secret_key = secretKey
        fields.addressee = email
        fields.asunto = "Contacto desde la web - de: " + fields.name
        if(!isSending){
            setIsSending(true);
            grecaptcha.ready(function() {
                grecaptcha.execute(siteKey, { action: 'contacto' }).then(function(getToken) {
                    fields.token = getToken;
                    
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
            //console.error(error)
            toast.error('No se pudo enviar el mensaje vuelva a intentarlo más tarde.')
        })
        .finally(() => {
            setIsSending(false);
        })
    }
    return (
        <form id="aboutForm" method="post" onSubmit={handleSubmit}>
            <Toaster richColors position="bottom-right" />
            <input className="input placeholder:text-gray-400 focus:ring-1 ring-primary-50" type="text" name="name" placeholder="Nombre" required />
            <input className="input placeholder:text-gray-400 focus:ring-1 ring-primary-50" type="tel" name="phone" placeholder="Teléfono" required />
            <textarea className="placeholder:text-gray-400 focus:ring-1 ring-primary-50" rows="3" name="message" placeholder="Tu consulta" required></textarea>
            <div className="form-check mb-2 flex">
                <input className="form-check-input mr-3" name="politicas" type="checkbox" value="" id="flexCheckDefault" required />
                <label className="form-check-label" htmlFor="flexCheckDefault" >
                    He leído y acepto la <OpenModalPolitics /> y <a target="_blank" className="link-politica" href="./politica-privacidad">Políticas
                    de Privacidad</a>
                </label>
            </div>
            <button disabled={isSending} type="submit" className="site-btn">Consultar</button>
        </form>
    )
}