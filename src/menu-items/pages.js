// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Tracking',
    // caption: 'Features yaha jaayege',
    type: 'group',
    children: [
        {
            id: 'feature1',
            title: 'Track User',
            type: 'item',
            url: '/features/feature1',
            icon: icons.IconKey,
            breadcrumbs: false
        },
        {
            id: 'feature2',
            title: 'IP Monitoring',
            type: 'item',
            url: '/features/feature2',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
};

export default pages;
