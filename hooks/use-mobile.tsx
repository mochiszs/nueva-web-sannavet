import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Se crea la consulta de media para el breakpoint de dispositivos móviles
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Función que maneja el cambio de tamaño
    const onChange = () => {
      setIsMobile(mql.matches) // Actualiza el estado solo cuando cambia el estado de la consulta
    }

    // Añadimos el listener para los cambios en la consulta de media
    mql.addEventListener("change", onChange)

    // Establecemos el valor inicial de isMobile basado en el tamaño actual
    setIsMobile(mql.matches)

    // Cleanup: quitamos el listener cuando el componente se desmonta
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Devolvemos el valor booleano de isMobile, asegurándonos de que sea un valor booleano
  return isMobile ?? false
}
