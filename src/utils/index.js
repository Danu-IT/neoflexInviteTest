import { v4 } from 'uuid';
import one from '../assets/main/one.png'
import two from '../assets/main/two.png'
import three from '../assets/main/three.png'
import four from '../assets/main/four.png'
import five from '../assets/main/five.png'
import six from '../assets/main/six.png'


export const headphones = [
    {
        id: v4(),
        img: one,
        title: 'Apple BYZ S852I',
        price: 2927,
        rate: 4.7,
        wired: true,
    },
    {
        id: v4(),
        img: two,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
        wired: true,
    },
    {
        id: v4(),
        img: three,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.7,
        wired: true,
        inBasket: '',
    },
    {
        id: v4(),
        img: four,
        title: 'Apple AirPods',
        price: 9527,
        rate: 4.7,
        wired: false,
    },
    {
        id: v4(),
        img: five,
        title: 'GERLAX GH-04',
        price: 6527,
        rate: 4.7,
        wired: false,
    },
    {
        id: v4(),
        img: six,
        title: 'BOROFONE BO4',
        price: 7527,
        rate: 4.7,
        wired: false,
    }

]