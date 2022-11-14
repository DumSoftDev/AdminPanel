import React from 'react';

import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';


const DataTable = () => {
   
    const actionColumn = [
        { field:'action', headerName: 'Action', minWidth: 300, renderCell: ()=> {
            return (
                <div className="cellAction">
                    <div className="viewButton">Ver</div>
                    <div className="deleteButton">Borrar</div>
                </div>
            )
        }},
    ];

    return (
        <div className='dataTable'>
            {/* <DataGrid
            rows={ userRows }
            columns={ userColumns.concat( actionColumn ) }
            pageSize={ 9 }
            rowsPerPageOptions={ [9] }
            autoHeight={ true }
            checkboxSelection
            /> */}
        </div>
    )
}

export default DataTable
