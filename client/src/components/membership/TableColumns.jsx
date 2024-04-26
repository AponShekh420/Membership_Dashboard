import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Badge, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function notificationsLabel(count) {
  return `${count} notifications`;
}
const TableColumns = ({value, column}) => {
  const [view, setView] = useState(false)
  if (column.id == "password") {
    if(view) {
      return (
        <div onClick={()=> setView(false)}>
          {column.format && typeof value === 'number'
          ? <IconButton aria-label={notificationsLabel(column.format(value))}>
              <Badge badgeContent={column.format(value)} color="secondary">
                <VisibilityIcon style={{marginTop: "5px"}}/>
              </Badge>
            </IconButton>
          : <IconButton aria-label={notificationsLabel(value)}>
              <Badge badgeContent={value} color="secondary">
                <VisibilityIcon style={{marginTop: "5px"}}/>
              </Badge>
            </IconButton>}
        </div>
      )
    } else {
      return (
        <div onClick={()=> setView(true)}>
          {column.format && typeof value === 'number'
          ? <VisibilityOffIcon >
              {column.format(value)}
            </VisibilityOffIcon> 
          : <VisibilityOffIcon  >
              {value}
            </VisibilityOffIcon>}
        </div>
      )
    }
  } else if (column.id == "view") {
    return (
      <div>
        <Button color="success" variant="contained" endIcon={<SendIcon />} size='small'>
          GO
        </Button>
      </div>
    )
  } else if (column.id == "status") {
    if(value == "Cancelled") {
      return (
        <div>
          <Button variant="outlined" color="error" size='small' style={{ cursor: 'default', background: "rgba(255, 0, 0, 0.26)" }}>
            {value}
          </Button>
        </div>
      )
    } else if (value == "Active") {
      return (
        <div>
          <Button variant="outlined" color="success" size='small' style={{ cursor: 'default', background: "rgba(1, 117, 19, 0.26)" }}>
            {value}
          </Button>
        </div>
      )
    }
  } else {
    return (
      <div>
        {column.format && typeof value === 'number' 
        ? column.format(value)
        : value}
      </div>
    )
  }
}

export default TableColumns;