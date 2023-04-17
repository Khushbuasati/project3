import DashboardIcon from '@mui/icons-material/Dashboard';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import TableViewIcon from '@mui/icons-material/TableView';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const subMenu = [
    {name: 'Landing Page', list2: ['Corporate']},
    {name: 'Dashboard', list2: ['Personal, Sales MArketing', 'Cryptocurrency']},
    {name: 'Dashboard Widgets', list2: ['Infographics', 'Status', 'Mini Apps', 'Analytics', 'Info & Updates']},
    {name: 'Layout', list2: ['Grid', 'App Layout', 'Responsive']}
];

export const menuList = [
    {
        id: '1',
        name: 'Home',
        Icon: DashboardIcon,
        list1: subMenu,
    },
    {
        id: '2',
        name: 'Applications',
        Icon: ScatterPlotIcon,
        list1: subMenu,
    },
    {
        id: '3',
        name: 'Pages',
        Icon: FolderCopyIcon,
        list1: subMenu,
    },
    {
        id: '4',
        name: 'Tables',
        Icon: TableViewIcon,
        list1: subMenu,
    },
    {
        id: '5',
        name: 'Forms Buttons',
        Icon: BorderColorIcon,
        list1: subMenu,
    },
];