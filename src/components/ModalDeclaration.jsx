import { useStore } from '@nanostores/react';
import { isModalDeclarationOpen } from '@/components/services/store';

export default function ModalDeclaracion() {
  const isOpen = useStore(isModalDeclarationOpen);
  return (
    <div className="modal fade" id="modal-declaracion">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Declaración de cookies</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <script id="CookieDeclaration" src="https://consent.cookiebot.com/7862cd37-4076-44cb-9688-c3581e4fd905/cd.js" type="text/javascript" async></script>
          </div>
          <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default w-100" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
  </div>
  )
}
