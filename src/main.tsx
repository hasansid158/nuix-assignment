import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './index.css'

import { ThemeProvider } from '@mui/material/styles';
import theme from './core/theme'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
