import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ProcessorDto } from '../Dtos'
import '../../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditProcessorForm from './EditProcessorForm';

const ListProcessors = () => {

 const [processors, setProcessors] = useState<Array<ProcessorDto>>([])

 const [open, setOpen] = useState(false);

 const [tempProcessors, setTempProcessors] = useState<ProcessorDto>();

 const GetAllProcessors = () => {
  axios.get('https://localhost:7107/api/processor').then(res => {
   setProcessors(res.data)
  })
 }

 const handleOpen = (v: ProcessorDto) => {
  setTempProcessors(v)
  setOpen(true);

 };
 const handleClose = () => {
  setOpen(false);
  GetAllProcessors()
 };

 useEffect(() => {
  GetAllProcessors()
 }, [])

 const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
     <th className='header__item'>Name</th>
     <th className='header__item'>Speed</th>
     <th className='header__item'>Level</th>
    </tr>
    <tr>
     {processors.map((processor) => {
      return (
       <>
        <div className='table-row'>
         <td className='table-data'>
          <button className='actions' onClick={() => handleOpen(processor)}>
           <EditIcon />
          </button>
          <Modal
           open={open}
           onClose={handleClose}
           aria-labelledby="parent-modal-title"
           aria-describedby="parent-modal-description"
          >
           <Box sx={{ ...modalStyle, width: 600, height: 500, backgroundColor: '#4e4e4e', color:'white'  }}>
            <h1 style={{ position: 'relative', left: '30%' }}>Edit {tempProcessors?.name}</h1>
            <EditProcessorForm
             id={tempProcessors?.id!}
             name={tempProcessors?.name!}
             vitesse={tempProcessors?.vitesse!}
             niveau={tempProcessors?.niveau!}
            />
           </Box>
          </Modal>
          <button className='actions' onClick={() => {
           axios.delete('https://localhost:7107/api/processor/ ' + processor.id).then(() => {
            GetAllProcessors()
           })
          }}><DeleteIcon /></button>
         </td>
         <td className='table-data'>{processor.name}</td>
         <td className='table-data'>{processor.niveau}</td>
         <td className='table-data'> {processor.vitesse}</td>
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

export default ListProcessors
