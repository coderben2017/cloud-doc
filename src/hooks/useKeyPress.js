import { useState, useEffect } from 'react'

const useKeyPress = keyCode => {
  const [keyPressed, setKeyPressed] = useState(false)
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === keyCode) setKeyPressed(true)
    }
    const handleKeyUp = e => {
      if (e.keyCode === keyCode) setKeyPressed(false)
    }
    
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [ keyCode ])
  
  return keyPressed
}

export default useKeyPress
