import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { UserDto } from '../Dtos';
import EditUserForm from './EditUsersForm';

const ListUsers = () => {

  const [Users, setUsers] = useState<Array<UserDto>>([])

  const [open, setOpen] = useState(false);
  
  const [tempUser, setUser] = useState<UserDto>();

  const GetAllUsers = () => {
    axios.get('https://localhost:7107/api/user').then(res => {
      setUsers(res.data)
    })
  }

  const handleOpen = (v: UserDto) => {
    setUser(v)
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
    GetAllUsers()
  };

  useEffect(() => {
    GetAllUsers()
  }, [])

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


  return (<>
    <table className='table'>
      <tbody>
        <tr className='table-header'>
          <th className='header__item'>
            Action
          </th>
          <th className='header__item'>Name</th> 
        </tr>
        <tr>
          {Users.map((user) => {
            return (
              <>
                <div className='table-row'>
                  <td className='table-data'>
                    <button className='actions' onClick={() => handleOpen(user)}>
                      <EditIcon />
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...modalStyle, width: 600, height: 500, backgroundColor: '#4e4e4e', color:'white'  }}>
                        <h1 style={{position:'relative', left:'30%'}}>Edit {tempUser?.name}</h1>
                        <EditUserForm
                         name={tempUser?.name!} 
                         id={tempUser?.id!} 
                        /> 
                      </Box>
                    </Modal>
                    <button className='actions' onClick={() => {
                      console.log("Computer to delete", tempUser)
                      axios.delete('https://localhost:7107/api/user/ ' + user.id).then(() => {
                        GetAllUsers()
                      })
                    }}><DeleteIcon /></button>
                  </td>
                  <td className='table-data'>{user.name}</td>
                </div>

              </>
            )
          })}
        </tr>
      </tbody>
    </table>

  </>
  );
}

export default ListUsers
