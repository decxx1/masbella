import { Toaster, toast } from 'sonner'
import { OpenModalPolitics } from '@/components/OpenModalPolitics'
import { useState } from 'react'
import axios from 'axios';


export default function Contactform () {
    const [isSending, setIsSending] = useState(false);
    const resetForm = () => {
        document.getElementById('contactForm').reset();
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
        <div className="contact__form">
            <Toaster richColors position="bottom-right" />
            <h3>Escríbenos un mensaje</h3>
            <form id="contactForm" method="post" onSubmit={handleSubmit} >
                <input className="input" type="text" name="nombre" placeholder="Nombre" required/>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <input className="input" type="email" name="email" placeholder="E-mail" required/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input className="input" type="tel" name="telefono" placeholder="Teléfono" required/>
                    </div>
                </div>
                <textarea name="mensaje" placeholder="Mensaje" required></textarea>
                <div className="form-check mb-2">
                    <input className="form-check-input" name="politicas" type="checkbox" value="" id="flexCheckDefault" required/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    He leído y acepto la <OpenModalPolitics /> y <a className="link-politica" target="_blank" href="./politica-privacidad">Políticas
                    de Privacidad</a> para el tratamiento de mis datos sobre mi solicitud.
                    </label>
                </div>
                <button disabled={isSending} type="submit" className="site-btn">Enviar mensaje</button>
            </form>
        </div>
    )
}
