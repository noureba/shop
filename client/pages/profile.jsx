import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { Tabs, Tab, Box } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import Order from '../components/profile/Order'
import History from '../components/profile/History'
import Info from '../components/profile/Info'
import {useSelector} from 'react-redux'

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Profil() {
  const userr = useSelector( state => state.user)
  console.log(userr)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const orders =[{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status:"active"
  }]

  const history =[{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    date: "02/03/2018"
  }]

  const user={
    id:"1",
    fullName:"noureddine bachikh",
    email:"noureddine@gmail.com"
  }

  return (
    <Layout title="Profil">
      <Box
        sx={{
          maxWidth: "1300px",
          margin: "80px auto",
          display: "flex",
          flexDirection: "column",
          jusifiyContent:"center",
          alignItems:"center",
          padding: "20px",
        }}
      >
        <Tabs
          orientation="horizontal"
          variant="standard"
          value={value}
          onChange={handleChange}
          allowScrollButtonsMobile={true}
          scrollButtons={true}
          sx={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            scroll:"auto",
            maxWidth:"400px"
          }}
        >
          <Tab label="Order" icon={<InventoryIcon/>} iconPosition="start" {...a11yProps(1)} />
          <Tab label="History" icon={<HistoryIcon/>} iconPosition="start" {...a11yProps(2)} />
          <Tab label="Setting" icon={<SettingsIcon/>} iconPosition="start" {...a11yProps(3)} />
        </Tabs>
        <Box
          sx={{
            maxWidth: "800px",
          }}
        >

          <TabPanel value={value} index={0}>
            <Order orders={orders}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <History history={history}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Info user={user}/>
          </TabPanel>
        </Box>
      </Box>
    </Layout>
  );
}

export default Profil;
