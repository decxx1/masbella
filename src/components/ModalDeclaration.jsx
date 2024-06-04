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
    <>
      <div className={`${isOpen ? 'block' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[998] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h4 className="text-xl font-semibold text-gray-900">Declaración de cookies</h4>
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
              <div id="CookieDeclaration" />
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
