import { useStore } from '@nanostores/react';
import { isModalDeclarationOpen } from '@/services/store';

export default function OpenModalDeclaration() {
  // lee el valor del store con el hook `useStore`
  const isOpen = useStore(isModalDeclarationOpen);
  // escribe en el store importado usando `.set`
  return (
    <>
      <a type="button" onClick={() => isModalDeclarationOpen.set(!isOpen)}>Declaración de cookies</a>
    </>
  )
}