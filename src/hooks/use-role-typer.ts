import { useEffect, useState } from "react"

export function useRoleTyper(roles: string[]) {
  const [displayed, setDisplayed] = useState(roles[0])
  const [fade, setFade] = useState(true)

  useEffect(() => {
    let idx = 0
    const t = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        idx = (idx + 1) % roles.length
        setDisplayed(roles[idx])
        setFade(true)
      }, 280)
    }, 2800)
    return () => clearInterval(t)
  }, [roles])

  return { displayed, fade }
}