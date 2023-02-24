import {MdOutlineSpaceDashboard,MdOutlineNavigateNext} from 'react-icons/md';
import {FaRegUser} from 'react-icons/fa';
import { svgs } from './svgIcons';
export const navList = [
    {id: 1,text: 'Dashboard',icon1:svgs.dashbaord,icon2:'',body:'',hide:'hide', href:'/'},
    {id: 2,text: 'Users',icon1:svgs.users,icon2: svgs.next180,body:[{text:'All Users',href:'/all',},{text:'New Users',href:'/new'},{text:'Verifications',href:'/verifications'}, {text:'Inactive Users',href:'/inactive'}],hide:'',href:'#'},
    {id: 3,text: 'Transactions',icon1:svgs.transactions,icon2: svgs.next180,body:[{text:'All Transactions',href:'/alltrans',},{text:'Deposits',href:'/deposites'},{text:'Witdrawals',href:'/witdrawals'}, {text:'Pending',href:'/pending'}],hide:'',},
    {id: 4,text: 'Investments',icon1:svgs.investment,icon2: svgs.next180,body:[{text:'Overview',href:'/overview',},{text:'Add Investment',href:'/addinves'},{text:'transactions',href:'/nill'}, {text:'Payouts',href:'/nill'}],hide:'',},
    {id: 5,text: 'Wallets',icon1:svgs.piggyBank,icon2: svgs.next180,body:[{text:'Overview',href:'/overview',},{text:'Blue Vault',href:'/nill'},{text:'Tup Dollar',href:'/nill'}, {text:'Flexy Naira',href:'/nill'}],hide:'',},
    {id: 6,text: 'Saving Challange',icon1:svgs.bitcoin,icon2: svgs.next180,body:[{text:'Overview',href:'/overview',},{text:'Saving Challanges',href:'/nill'},{text:'All Savers',href:'/nill'},],hide:'',},
    {id: 7,text: 'Refferal System',icon1:svgs.refresh,icon2: svgs.next180,body:[{text:'Overview',href:'/overview',},{text:'All Savers',href:'/nill'},{text:'Saving Challange',href:'/nill'},],hide:'',},
    {id: 8,text: 'Customer Support',icon1:svgs.heartHandshake,icon2: "",body:"",hide:'hide', href:'/support'},
]