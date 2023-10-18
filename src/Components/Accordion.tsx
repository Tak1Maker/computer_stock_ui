import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function AccordionMenu() {
 return (
  <div>
   <Accordion defaultExpanded={true} sx={{ backgroundColor: '#3d3d3d', width: '100%' }}>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
     <Typography sx={{ color: '#fff' }}><FormatListBulletedIcon sx={{ color: '#bd5457', height: '20px' }} /> Computer</Typography>
    </AccordionSummary>
    <AccordionDetails>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <AddBoxIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/create-computer'> New computer</Link>
     </ListItemButton>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <ListAltIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/list-computer'> List computers</Link>
     </ListItemButton>

    </AccordionDetails>
   </Accordion>

   <Accordion defaultExpanded={false} sx={{ backgroundColor: '#3d3d3d', width: '100%' }}>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
     <Typography sx={{ color: '#fff' }}><FormatListBulletedIcon sx={{ color: '#bd5457', height: '20px' }} /> Borrow</Typography>
    </AccordionSummary>
    <AccordionDetails>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <AddBoxIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/create-borrow'> New Borrow </Link>
     </ListItemButton>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <ListAltIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/list-borrow'> List Borrow</Link>
     </ListItemButton>

    </AccordionDetails>
   </Accordion>



   <Accordion defaultExpanded={false} sx={{ backgroundColor: '#3d3d3d', width: '100%' }}>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
     <Typography sx={{ color: '#fff' }}><FormatListBulletedIcon sx={{ color: '#bd5457', height: '20px' }} /> Users</Typography>
    </AccordionSummary>
    <AccordionDetails>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <AddBoxIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/create-users'> New User </Link>
     </ListItemButton>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <ListAltIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/list-users'> List Users</Link>
     </ListItemButton>

    </AccordionDetails>
   </Accordion>


   <Accordion defaultExpanded={false} sx={{ backgroundColor: '#3d3d3d', width: '100%' }}>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
     <Typography sx={{ color: '#fff' }}><FormatListBulletedIcon sx={{ color: '#bd5457', height: '20px' }} /> Processors</Typography>
    </AccordionSummary>
    <AccordionDetails>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <AddBoxIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/create-processor'> New Processor</Link>
     </ListItemButton>

     <ListItemButton sx={{ textAlign: 'center' }}>
      <ListAltIcon sx={{ color: '#bd5457', paddingRight: 1 }} />
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/list-processors'> List Processors</Link>
     </ListItemButton>

    </AccordionDetails>
   </Accordion>



  </div>
 );
}
