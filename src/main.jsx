import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import  UserStorage   from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>  
      	<UserStorage>
        	<App />
     	</UserStorage>
    </BrowserRouter>

)
