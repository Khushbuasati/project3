import LensBlurIcon from '@mui/icons-material/LensBlur';
import LaptopIcon from '@mui/icons-material/Laptop';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ToysIcon from '@mui/icons-material/Toys';

import buyer1 from '../assests/images/conversation_1.jpg';
import buyer2 from '../assests/images/conversation_2.jpg';
import buyer3 from '../assests/images/conversation_3.jpg';
import buyer4 from '../assests/images/conversation_4.jpg';

import product1 from '../assests/images/product1.jpg';
import product2 from '../assests/images/product2.jpg';
import product3 from '../assests/images/product3.jpg';
import product4 from '../assests/images/product4.jpg';

export const products = [
    {
        id: '1',
        productDetails: { name: 'Woman Bag', nameSub: 'QWE123', img: product1 },
        buyerDetails: { name: 'John Doe', date: '23 Oct 2018', img: buyer1 },
        total: '$300,00', status: 'Canceled', 
        stockDetails: { StockIcon: LensBlurIcon, stockValue: [14, 30], stockProgress: 45 }
    },
    {
        id: '2',
        productDetails: { name: 'Laptop', nameSub: 'ABC890', img: product2 },
        buyerDetails: { name: 'Jim Doe', date: '11 Nov 2018', img: buyer2 },
        total: '$230,00', status: 'Sent', 
        stockDetails: { StockIcon: LaptopIcon, stockValue: [25, 70], stockProgress: 35 }
    },
    {
        id: '3',
        productDetails: { name: 'Pinapple Jam', nameSub: 'GHI556', img: product3 },
        buyerDetails: { name: 'Jane Doe', date: '5 Nov 2018', img: buyer3 },
        total: '$34,00', status: 'Pending', 
        stockDetails: { StockIcon: RestaurantMenuIcon, stockValue: [35, 50], stockProgress: 75 }
    },
    {
        id: '4',
        productDetails: { name: 'Action Figure', nameSub: 'MNO444', img: product4 },
        buyerDetails: { name: 'Jack Doe', date: '22 Sept 2018', img: buyer4 },
        total: '$17,00', status: 'Paid', 
        stockDetails: { StockIcon: ToysIcon, stockValue: [9, 85], stockProgress: 15 }
    }
];