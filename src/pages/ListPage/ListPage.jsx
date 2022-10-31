import './ListPage.scss';
import AddIcon from '@mui/icons-material/Add';
import DataTable from '../../components/DataTable/DataTable';
import NavBar from '../../components/NavBar/NavBar';
import SideBard from '../../components/SideBar/SideBard';


const ListPage = () => {
  return (
    <div className='listPage'>

      <SideBard />
      
      <div className="listContainer">
      
        <NavBar />
      
        <div className="newItem">
          <h1 className="title">Usuarios</h1>
          <div className="newButton">
            <AddIcon className='icon' />
            <span>Nuevo Usuario</span>
          </div>
        </div>
        
        <div className="listDataTableContainer">
          <DataTable />
        </div>
      
      </div>
    
    </div>
  )
}

export default ListPage
