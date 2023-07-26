import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


function AddressSection({ content, addressDatalist, setaddressDatalist }) {
   const { title, Address, Address1, City, State, ZipCode } = content;
   const [values, setValues] = useState(content);
   const [showEditbox, setShowEditbox] = useState(false);
   const [errorhandel, setErrorHandel] = useState(true);
  


   const handelEdit = () => {
      setShowEditbox(true)
   }

   const handelCancleBtn = () => {
      setShowEditbox(false)
   }
   const getHandler = (name) => {
      return (event) => {
         setValues({ ...values, [name]: event.target.value });
      };
   };

   const handelSaveBtn = () => {
      const updatedList = addressDatalist.map(obj => {
         if (obj.title === title) {
            return { ...obj, ...values };
         }
         return obj;
      });
      console.log();

      if (Object.values(updatedList[0]).some((x) => x === "")) {
         setErrorHandel(false);
      } else {
         setaddressDatalist(updatedList);
         handelCancleBtn();
      }
   }
   return (
      <>

         {showEditbox ? <div className="tileBorder saveTile">



            <TextField
               fullWidth
               label={"Address"}
               variant="standard"
               value={values.Address}
               onChange={getHandler("Address")} required
               error={!values.Address}
               helperText={!values.Address ? ' Required' : ''}
            />

            <TextField
               fullWidth
               label={"Address1"}
               variant="standard"
               value={values.Address1}
               onChange={getHandler("Address1")} required
               error={!values.Address1}
               helperText={!values.Address1 ? ' Required' : ''}
            />

            <div  >

               <TextField
                  label={"City"}
                  variant="standard"
                  value={values.City}
                  onChange={getHandler("City")} required
                  error={!values.City}
                  helperText={!values.City ? ' Required' : ''}
               />

               <TextField
                  label={"State"}
                  variant="standard"
                  value={values.State}
                  onChange={getHandler("State")} required
                  error={!values.State}
                  helperText={!values.State ? ' Required' : ''}
               />

               <TextField
                  label={"Zip Code"}
                  variant="standard"
                  value={values.ZipCode}
                  onChange={getHandler("ZipCode")} required
                  error={!values.ZipCode}
                  helperText={!values.ZipCode ? ' Required' : ''}
               />

            </div>




            <div className="button_wrapper">
               <Button variant="contained" onClick={handelSaveBtn}>save</Button>
               <Button variant="contained" onClick={handelCancleBtn}>cancle</Button>
               {!errorhandel && <Alert severity="error"><AlertTitle>Error</AlertTitle>Input is Empty</Alert>}
            </div>
         </div> :

            <div className="tileBorder">
               <div className="title-wrap">
                  <h6>{title}</h6>
                  <p>{Address} {Address1}{City}</p>
                  <p>{State} {ZipCode}</p>
               </div>
               <Button variant="outlined" onClick={handelEdit}>Edit</Button>
            </div>}
      </>)

}


export default AddressSection;