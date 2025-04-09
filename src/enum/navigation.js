import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const NAVIGATION = [
    {
        name: 'Về chúng tôi',
        to: '/',
    },
    {
        name: 'Dịch vụ điều dưỡng',
        to: '/services',
    },
    {
        name: 'Dịch vụ chăm sóc y tế',
        icon: KeyboardArrowDownIcon,
        children: [
            {
                name: 'Dịch vụ test - xét nghiệm',
                to: '/services/test'
            },
            {
                name: 'Dịch vụ chăm bệnh',
                to: '/services/care'
            },
            {
                name: 'Dịch vụ khác',
                to: '/services/other'
            },
        ]        
    },
    {
        name: 'Cho thuê thiết bị y tế',
        icon:KeyboardArrowDownIcon,
        children: [
            {
                name:'Cho thuê máy thở - oxy',
                to: '/services/rent/oxygen'
            },
            {
                name:'Cung cấp và đổi bình oxy',
                to: '/services/rent/oxygen-supply'
            },
            {
                name:'Cho thuê máy hút đàm',
                to: '/services/rent/suction'
            },            
        ]
    },
    {
        name: 'Cẩm nang',
        icon:KeyboardArrowDownIcon,
        children: [
            {
                name:'Chăm sóc da',
                to: '/camnang/chamsocda'
            },
            {
                name:'Chăm sóc xương khớp',
                to: '/camnang/chamsocxuongkhop'
            },
            {
                name:'Sức khỏe hô hấp',
                to: '/camnang/suckhoehohap'
            },    
            {
                name:'Sức khỏe tim mạch',
                to: '/camnang/suckhoetimmach'
            },           
        ]
    },
    {
        name:'Cho thuê xe cứu thương',
        to: '/ChoThueXeCapCuu'
    },
    {
        name:'Tin Tức',
        to: '/tintucyte'
    },
   
    {
        name:'Tuyển dụng',
        to: '/tuyendung'       
    },
    {
        name:'Liên hệ',
        to: '/lienhe'
    },
]