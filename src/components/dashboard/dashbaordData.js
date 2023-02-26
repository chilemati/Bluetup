import { svgs } from "../nav/svgIcons";

export  const dashbaordData = {
    row1: [
        {
            text1: 'All Users',
            text2: 'View',
            icon1: svgs.arrow180,
            total: '4,378',
            icon2: svgs.student,
            icon_bg: 'rgba(13, 131, 60, 0.5)',
            card_bb: '3px solid #0D833C',
            card_br: '5px',
            card_bg: '#FFFFFF'
        },
        {
            text1: 'Total Investments',
            text2: 'View',
            icon1: svgs.arrow180,
            total: 'NGN 5,345,001',
            icon2: svgs.investment,
            icon_bg: 'rgba(217, 38, 28, 0.5)',
            card_bb: '3px solid #D9261C',
            card_br: '5px',
            card_bg: '#FFFFFF'
        },
        {
            text1: 'Total Savings',
            text2: 'View',
            icon1: svgs.arrow180,
            total: 'NGN 5,345,001',
            icon2: svgs.piggyBank,
            icon_bg: 'rgba(48, 57, 114, 0.5)',
            card_bb: '3px solid #1B2774',
            card_br: '5px',
            card_bg: '#FFFFFF'
        },
    ],
    row2: {
        boxa:{
            icon1: svgs.eclipse,
            color: '#0D833C',
            text: 'Deposits',
            total: '5,200,000.00 NGN',
            text1: 'Last Month',
            price: '1,300,000.00 NGN',
            title: 'Financial Insight'
        },
        boxb:{
            icon1: svgs.eclipse,
            color: '#D9261C',
            text: 'Witdraws',
            total: '0.00 NGN',
            text1: 'Last Month',
            price: '0.00 NGN',
        },
    },
    row3: {
        title: 'Bluetup Finance',
        text1: 'This Week',
        text2: 'Last Week'

    }
    
}