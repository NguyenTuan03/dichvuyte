import ChamsocDa from '../pages/camnang/ChamSocDa';
import ChamSocXuongKhop from '../pages/camnang/ChamSocXuongKhop';
import SucKhoeHoHap from '../pages/camnang/SucKhoeHoHap';
import SucKhoeTimMach from '../pages/camnang/SucKhoeTimMach';
import ChoThueXeCapCuu from '../pages/chothuexecapcuu/ChoThueXeCapCuu';
import LienHe from '../pages/lienhe/LienHe';
import TinTucYTe from '../pages/tintuc/TinTucYte';
import Tuyendung from '../pages/tuyendung/TuyenDung';
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
    {
        path: routesConfig.chamsocda,
        component: ChamsocDa
    },     
    {
        path: routesConfig.chamsocxuongkhop,
        component: ChamSocXuongKhop
    },     
    {
        path: routesConfig.suckhoehohap,
        component: SucKhoeHoHap
    },   
    {
        path: routesConfig.suckhoetimmach,
        component: SucKhoeTimMach
    },           
];

export default publicRoutes;
