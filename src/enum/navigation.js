import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const NAVIGATION = [
    {
        name: 'Về chúng tôi',
        to: '/',
    },
    {
        name: 'Dịch vụ điều dưỡng',
        to: '/dichvu',
    },
    {
        name: 'Dịch vụ chăm sóc y tế',
        icon: KeyboardArrowDownIcon,
        children: [
            {
                name: 'Dịch vụ test - xét nghiệm',
                to: '/dichvu/test'
            },
            {
                name: 'Dịch vụ chăm bệnh',
                to: '/dichvu/chambenh'
            },
            {
                name: 'Dịch vụ khác',
                to: '/dichvu/khac'
            },
        ]        
    },
    {
        name: 'Cho thuê thiết bị y tế',
        icon:KeyboardArrowDownIcon,
        children: [
            {
                name:'Cho thuê máy thở - oxy',
                to: '/dichvu/thue/oxygen'
            },
            {
                name:'Cung cấp và đổi bình oxy',
                to: '/dichvu/thue/cungcapbinhoxy'
            },
            {
                name:'Cho thuê máy hút đàm',
                to: '/dichvu/thue/mayhutdam'
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