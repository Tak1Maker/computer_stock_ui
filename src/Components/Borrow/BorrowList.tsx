import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BorrowDto } from '../Dtos';
import EditBorrowForm from './EditBorrow';
import moment from 'moment';
import Button from '@mui/material/Button';



const BorrowList = () => {

  const [borrow, setBorrow] = useState<Array<BorrowDto>>([])

  const [open, setOpen] = useState(false);

  const [tempBorrow, setTempBorrow] = useState<BorrowDto>();

  const GetAllStates = () => {
    axios.get('https://localhost:7107/api/borrow').then(res => {
      setBorrow(res.data)
    })
  }

  const handleOpen = (v: BorrowDto) => {
    setTempBorrow(v)
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
    GetAllStates()
  };

  const HandleButtonDisable = (borrow: BorrowDto) => {
    if (borrow.toDate == null)
      return false
    else return true
  }

  useEffect(() => {
    GetAllStates()
  }, [])

  const AfficherDate = (toDate: Date | null) => {
    if (toDate == null)
      return "Still In borrow"
    else
      return moment(toDate).format('MMM Do YY')
  }

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
          <th className='header__item'>Action</th>
          <th className='header__item'>Computer</th>
          <th className='header__item'>User</th>
          <th className='header__item'>From Date</th>
          <th className='header__item'>To Date</th>
          <th className='header__item'>Comment</th>
          <th className='header__item'>Return</th>
        </tr>
        <tr>
          {borrow.map((borrow) => {
            return (
              <>
                <div className='table-row'>
                  <td className='table-data'>
                    <button className='actions' onClick={() => handleOpen(borrow)}>
                      <EditIcon />
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...modalStyle, width: 600, height: 500, backgroundColor: '#4e4e4e', color: 'white' }}>
                        <h1 style={{ position: 'relative', left: '5%' }}> {`${tempBorrow?.computer?.name} / ${tempBorrow?.user?.name} / ${moment(tempBorrow?.fromDate).format('MMM Do YY')} `}</h1>
                        <EditBorrowForm borrow={tempBorrow!}
                        />
                      </Box>
                    </Modal>
                    <button className='actions' onClick={() => {
                      console.log("Computer to delete", tempBorrow)
                      axios.delete('https://localhost:7107/api/borrow/ ' + borrow.id).then(() => {
                        GetAllStates()
                      })
                    }}><DeleteIcon /></button>
                  </td>
                  <td className='table-data'>{borrow.computer?.name}</td>
                  <td className='table-data'>{borrow.user?.name}</td>
                  <td className='table-data'>{moment(borrow.fromDate).format('MMM Do YY')}</td>
                  <td className='table-data'>{AfficherDate(borrow.toDate)}</td>
                  <td className='table-data'>{borrow.comment}</td>

                  <td className='table-data'>
                    <Button variant="text" disabled={HandleButtonDisable(borrow)}
                      onClick={() => {

                        borrow.toDate = new Date()
                        axios.post('https://localhost:7107/api/borrow/return', borrow)
                          .then(function (response) {
                            GetAllStates()
                            console.log(response)
                          })
                          .catch(function (error) {
                            console.log(error)
                          });
                      }}>
                      End Borrow
                    </Button>
                  </td>
                </div>

              </>
            )
          })}
        </tr>
      </tbody>
    </table>

  </>
  )
}

export default BorrowList