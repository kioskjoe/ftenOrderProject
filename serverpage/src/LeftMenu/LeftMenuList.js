import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Link} from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ViewListIcon from '@mui/icons-material/ViewList';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FaceIcon from '@mui/icons-material/Face';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion style={{boxShadow: 0, borderRadius: '0%', width: 250, fontSize:15}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '43%', flexShrink: 0 }}>
            고객로그인
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>

                <ListItem disablePadding>            
                  <ListItemButton>
                      <ListItemIcon>
                        <FaceIcon />
                      </ListItemIcon>
                      <Link to="/">
                      <ListItemText primary="고객사로그인" />
                      </Link>
                  </ListItemButton>        
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuBookIcon/>
                    </ListItemIcon>
                    <Link to="/AddMainMenuFun">
                    <ListItemText primary="메뉴추가" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ViewListIcon />
                    </ListItemIcon>
                    <Link to="/MainMenuTable">
                     <ListItemText primary="메뉴관리" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ViewListIcon />
                    </ListItemIcon>
                    <Link to="/OptionMenu">
                     <ListItemText primary="메뉴옵션" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <Link to="/CustomerListTable">
                     <ListItemText primary="매출관리" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <Link to="/ClientListTable">
                      <ListItemText primary="고객공지" />
                    </Link>
                  </ListItemButton>
                </ListItem>

              </List>
            </nav>
          </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{boxShadow: 0, borderRadius: '0%', width: 250, fontSize:15}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography sx={{ width: '53%', flexShrink: 0 }}>관리자로그인</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FaceIcon  />
                    </ListItemIcon>
                    <Link to="/">
                      <ListItemText primary="관리자로그인" />
                      </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddBusinessIcon />
                    </ListItemIcon>
                    <Link to="/ClientAdd">
                    <ListItemText primary="고객추가" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FeaturedPlayListIcon />
                    </ListItemIcon>
                    <Link to="/ClientListTable">
                      <ListItemText primary="고객리스트" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <Link to="/CustomerListTable">
                     <ListItemText primary="고객정보리스트" />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <Link to="/changeclientinfofun"></Link>
                    <ListItemText primary="관리 교육" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{boxShadow: 0, borderRadius: '0%', width: 250, fontSize:15}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography sx={{ width: '53%', flexShrink: 0 }}>
            공지사항
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="최근뉴스" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="사용방법" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="영업정보" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
