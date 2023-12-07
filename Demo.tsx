import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Rating,
  Button,
} from '@mui/material';

const randomData = [
  {
    name: 'John',
    imageUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Alice',
    imageUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Bob',
    imageUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Eva',
    imageUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Mike',
    imageUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
];
export default function CheckboxLabels() {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleChange = (index) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter((item) => item !== index);
      } else {
        return [...prevSelectedItems, index];
      }
    });
  };

  const handleConfirmClick = () => {
    // Do something with selectedItems, e.g., move them.
    console.log('Selected Items (Indices):', selectedItems);
    // Reset the selection
    setSelectedItems([]);
  };

  return (
    <div>
      <FormGroup>
        {randomData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemIcon>
              <Checkbox
                edge="end"
                checked={selectedItems.includes(index)}
                onChange={() => handleChange(index)}
              />
            </ListItemIcon>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.imageUrl} />
            </ListItemAvatar>
            <ListItemText primary={item.name} />
            <Rating readOnly name={`rating-${index}`} max={1} />
          </ListItem>
        ))}
      </FormGroup>
      <Button
        variant="contained"
        color="primary"
        onClick={handleConfirmClick}
        disabled={selectedItems.length === 0}
      >
        Confirm
      </Button>
    </div>
  );
}

// export default function CheckboxLabels() {
//   const [selectedItems, setSelectedItems] = React.useState([]);

//   const handleChange = (name) => {
//     setSelectedItems((prevSelectedItems) => {
//       if (prevSelectedItems.includes(name)) {
//         return prevSelectedItems.filter((item) => item !== name);
//       } else {
//         return [...prevSelectedItems, name];
//       }
//     });
//   };

//   const handleConfirmClick = () => {
//     // Do something with selectedItems, e.g., move them.
//     console.log('Selected Items:', selectedItems);
//     // Reset the selection
//     setSelectedItems([]);
//   };

//   return (
//     <div>
//       <FormGroup>
//         {randomData.map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemIcon>
//               <Checkbox
//                 edge="end"
//                 checked={selectedItems.includes(item.name)}
//                 onChange={() => handleChange(item.name)}
//               />
//             </ListItemIcon>
//             <ListItemAvatar>
//               <Avatar alt={item.name} src={item.imageUrl} />
//             </ListItemAvatar>
//             <ListItemText primary={item.name} />
//             <Rating readOnly name={`rating-${index}`} max={1} />
//           </ListItem>
//         ))}
//       </FormGroup>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleConfirmClick}
//         disabled={selectedItems.length === 0}
//       >
//         Confirm
//       </Button>
//     </div>
//   );
// }
