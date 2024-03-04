import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { isModalDeclarationOpen } from '@/services/store';

export default function ModalDeclaracion() {
  const isOpen = useStore(isModalDeclarationOpen);
  useEffect(() => {
    // Crear un elemento <script>
    const cookieScript = document.createElement('script');
    cookieScript.src = 'https://consent.cookiebot.com/7862cd37-4076-44cb-9688-c3581e4fd905/cd.js';
    cookieScript.async = true;

    // Insertar el script en el elemento con ID "CookieDeclaration"
    const cookieContainer = document.getElementById('CookieDeclaration');
    if (cookieContainer) {
      cookieContainer.appendChild(cookieScript);
    }
  }, []);

  const handleCloseModal = () => {
    isModalDeclarationOpen.set(false);
  }
  return (
    <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Declaración de cookies</h4>
            <button type="button" className="close" onClick={handleCloseModal} >
              <span aria-hidden="true">X</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="CookieDeclaration" />
          </div>
          <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default w-100" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
