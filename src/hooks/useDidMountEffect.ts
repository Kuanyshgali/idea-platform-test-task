import { useEffect, useRef } from 'react'

const useDidMountEffect = (func: () => undefined, deps: unknown[]) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      func()
    } else {
      didMount.current = true
    }
  }, deps)
}

export default useDidMountEffect
