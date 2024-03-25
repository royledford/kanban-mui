import Home from './pages/Home'
import ThemeProvider from './themes'

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}
