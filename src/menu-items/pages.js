// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Feature Tabs',
    caption: 'Features yaha jaayege',
    type: 'group',
    children: [
        {
            id: 'feature1',
            title: 'Feature 1',
            type: 'item',
            url: '/features/feature1',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
};

export default pages;
