import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


function AddressTiles({ content, addressDatalist, setaddressDatalist}) {
   const { title, value } = content;
   const [showEditbox, setShowEditbox] = useState(false);

   const [inputValue, setInputValue] = useState(value);
   const [errorhandel, setErrorHandel] = useState(true)

  



   const onChange = (event) => {
      setInputValue(event.target.value)
   }


   const handelEdit = () => {
      setShowEditbox(true)
   }
   const handelCancleBtn = () => {
      setShowEditbox(false)
   }

   const handelSaveBtn = () => {

      if(!inputValue){
         setErrorHandel(false)
      }else{
         const updatedList = addressDatalist.map(obj => {
            if (obj.title === title) {
               return { ...obj, value: inputValue };
            }
            return obj;
         });
         setaddressDatalist(updatedList);
         handelCancleBtn();
      }
   }

   return (
      <>

         {showEditbox ? <div className="tileBorder saveTile" >
            <div>

               <TextField 
               label={title} 
               variant="standard" 
               value={inputValue} 
               onChange={onChange} required 
               error={!inputValue}
               helperText= {!inputValue ? ' Required':''}
               />

             


            </div>
            <div className="button_wrapper">
               <Button variant="contained" onClick={handelSaveBtn}>save</Button>
               <Button variant="contained" onClick={handelCancleBtn}>cancle</Button>
               {!errorhandel && <Alert severity="error"><AlertTitle>Error</AlertTitle>Input is Empty</Alert>}
            </div>
         </div> : <div className="tileBorder" >
            <div className="title-wrap">
               <h6>{title}</h6>
               <p>{value}</p>
            </div>

            <Button variant="outlined" onClick={handelEdit}>Edit</Button>


         </div>}
      </>
   )
}


export default AddressTiles