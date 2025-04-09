import ChoThueXeCapCuu from '../pages/chothuexecapcuu/ChoThueXeCapCuu';
import LienHe from '../pages/lienhe/LienHe';
import TinTucYTe from '../pages/tintuc/TinTucYte';
import Tuyendung from '../pages/tuyendung/TuyenDung';
import routesConfig from './../config/Routes';
import Home from './../pages/home/Home';
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home
    },    
    {
        path: routesConfig.lienhe,
        component: LienHe
    },  
    {
        path: routesConfig.tuyendung,
        component: Tuyendung
    },  
    {
        path: routesConfig.chothuexecapcuu,
        component: ChoThueXeCapCuu
    },
    {
        path: routesConfig.tintucyte,
        component: TinTucYTe
    },            
]
export default publicRoutes;