import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { TextField } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import StickyHeadTable from '../components/membership/StickyHeadTable';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];




const Membership = () => {
  const [websiteUsers, setWebsiteUsers] = useState([]);
  const [companyNames, setCompanyNames] = useState([]);
  const [search, setSearch] = useState("")
  const changeWebsiteUsers = (event) => {
    const {
      target: { value },
    } = event;
    setWebsiteUsers(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const changeCompanys = (event) => {
    const {
      target: { value },
    } = event;
    setCompanyNames(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className="membership-container">
      <h2 className="page-heading">Admin Dashboard</h2>
      <div className='btn-box'>
      <Stack spacing={2} direction="row">
        <ColorButton variant="contained">Show Contributions</ColorButton>
      </Stack>
      </div>
      <div className='tableHeader'>
        <p className='users-counter'>Total users: <span className='usersNumber'>38</span></p>
        <div className='tableFilter'>
          <div>
            <FormControl sx={{ m: 1, ml:0, width: 250}} variant="standard" size="small">
              <TextField id="outlined-basic" label="Name/Email/Mobile" variant="outlined" size="small" onChange={(e)=> setSearch(e.target.value)} value={search}/>
            </FormControl>
            <FormControl sx={{ m: 1, width: 200}} size="small">
              <InputLabel id="demo-multiple-checkbox-label">Select Users</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={websiteUsers}
                onChange={changeWebsiteUsers}
                input={<OutlinedInput label="Select Users" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={websiteUsers.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 135, maxWidth: 200 }} size="small">
              <InputLabel id="demo-multiple-checkbox-label">Select Shop</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={companyNames}
                onChange={changeCompanys}
                input={<OutlinedInput label="Select Shop" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={companyNames.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<SearchIcon className='search-btn'/>}>
                Search
              </Button>
              <Button variant="outlined" startIcon={<RotateLeftIcon />}>
                Reset
              </Button>
            </Stack>
          </div>
        </div>
      </div>

      <div>
        <StickyHeadTable/>
      </div>

    </div>
  );
}

export default Membership;