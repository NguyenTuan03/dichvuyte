import routesConfig from './../config/Routes';
import Home from './../pages/home/Home';
import Services from './../pages/services/Services';
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home
    },    
    {
        path: routesConfig.services,
        component: Services
    },    
    
]
export default publicRoutes;