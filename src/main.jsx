import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='leumag-react/'>
    <App />
  </BrowserRouter>,
)
