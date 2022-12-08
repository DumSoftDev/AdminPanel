import AddModeratorIcon from '@mui/icons-material/AddModerator';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DescriptionIcon from '@mui/icons-material/Description';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

//temporary data

const links = [
  {
    id: 1,
    title: 'Dashboard',
    links: [
      {
        icon: <DashboardIcon className='icon' />,
        name: 'Dashboard',
      },
    ],
  },

  {
    id: 2,
    title: 'Operator',
    links: [
      {
        icon: <ShoppingBagIcon className='icon' />,
        name: 'Orders',
      },

      {
        icon: <PersonIcon className='icon' />,
        name: 'Customers',
      },

      {
        icon: <RestaurantMenuIcon className='icon' />,
        name: 'Restaurants',
      },

      {
        icon: <MenuBookIcon className='icon' />,
        name: 'Menus',
      },
    ],
  },

  {
    id: 3,
    title: 'Supervision',
    links: [
      {
        icon: <DeliveryDiningIcon className='icon' />,
        name: 'Deliveries',
      },
      {
        icon: <SportsMotorsportsIcon className='icon' />,
        name: 'Drivers',
      },
    ],
  },

  {
    id: 4,
    title: 'Admin',
    links: [
      {
        icon: <HandshakeIcon className='icon' />,
        name: 'Affiliates',
      },
      {
        icon: <PeopleAltIcon className='icon'/>,
        name: 'Employees',
      },
      {
        icon: <DescriptionIcon className='icon' />,
        name: 'Reports',
      },
    ],
  },

  {
    id: 5,
    title: 'Config',
    links: [
      {
        icon: <GroupAddIcon className='icon' />,
        name: 'Users',
      },
      {
        icon: <AddModeratorIcon className='icon' />,
        name: 'Roles',
      },
      {
        icon: <FormatListBulletedIcon className='icon' />,
        name: 'Logs',
      },
      {
        icon: <LogoutIcon className='icon' />,
        name: 'Logout',
      },
    ],
  },
];

const userColumns = [
  { field: 'id', headerName: 'ID', width: 70, flex: 1 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
    flex: 1,
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 100,
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    flex: 1,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '3snow@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '4snow@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '5snow@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '6snow@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '7snow@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '8snow@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'active',
    age: 65,
  },
];

export { links, userColumns, userRows };
