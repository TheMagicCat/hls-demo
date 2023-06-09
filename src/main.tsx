import { createRoot } from 'react-dom/client'
import { App } from './App'

const appRoot = document?.getElementById('root') as HTMLElement

createRoot(appRoot).render(<App />)
