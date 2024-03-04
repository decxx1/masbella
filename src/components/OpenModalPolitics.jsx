import { useStore } from '@nanostores/react';
import { isModalPoliticsOpen } from '@/services/store';

export function OpenModalPolitics() {
    
    const isOpen = useStore(isModalPoliticsOpen);
    return (
        <a type="button" className="link-politica" onClick={() => isModalPoliticsOpen.set(!isOpen)}>cláusula en Protección de Datos</a>
    )
}