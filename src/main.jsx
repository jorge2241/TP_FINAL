import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContactContextProvider } from './Context/ContactContext.jsx'
import { BrowserRouter } from 'react-router'



createRoot(document.getElementById('root')).render(


  <BrowserRouter>
            <ContactContextProvider>
     
              <App />
 
            </ContactContextProvider>
   </BrowserRouter>
 
)

/*   
   para poder usar el enrutador hay que encerrar al  App component 
*/
/* 
ContactContextProvider tiene un alcance global en toda el App,
tanto en el App como en sus hijos
*/
