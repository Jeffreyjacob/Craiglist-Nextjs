import communityImage from '@/public/assets/images/Rectangle 7.png';
import ForsaleImage from '@/public/assets/images/Rectangle 7 (1).png';
import HousingImage from '@/public/assets/images/Rectangle 7 (2).png';
import JobImage from '@/public/assets/images/Rectangle 7 (3).png';
import ServiceImage from '@/public/assets/images/Rectangle 7 (4).png';

export const  HeaderLink = [
    {
        label:"Home",
        route:"/"
    },
    {
        label:"Favourite",
        route:"/favorite"
    },
    {
        label:"Profile",
        route:"/profile"
    },
]

export const AboutLink = [
    {name:"About Craiglist"},
    {name:"Best of Craiglist"},
    {name:"Blog"},
    {name:"Career"},
    {name:"Contact Us"},
    {name:"Open Source"},
]

export const HelpLink = [
    {name:"Abuse & Legals"},
    {name:"Avoiding Scams & Fraud"},
    {name:"Feedback"},
    {name:"Personal Safety Tips"},
    {name:"Privacy Policy"},
    {name:"Site Map"},
    {name:"Terms"}
]

export const SelectCategoryLists = [
    {name:'Community',image:communityImage},
    {name:'For Sale',image:ForsaleImage},
    {name:'Housing',image:HousingImage},
    {name:'Jobs',image:JobImage},
    {name:'Services',image:ServiceImage},
] 