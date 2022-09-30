import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [currObj, setCurr] = React.useState({title: "", content: ""});
  const [touched, setTouched] = React.useState(false);
  function expanded(){
    setTouched(true);
  }

  function handleChange(event){
    const {name, value} = event.target;
    setCurr((prev) => {
      return ({...prev, [name]: value});
    });
    console.log(currObj);
  }
  function handle(event){
    props.addItem(currObj);
    event.preventDefault();
    setCurr({title: "", content: ""});
  }
  

  return (
    <div>
      <form className="create-note">
        {touched && (<input onChange={handleChange} name="title" placeholder="Title" value={currObj.title}/>)}
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows={touched? "3": "1"} value={currObj.content} onClick={expanded}/>
          
        <Zoom in = {touched}>
          <div><Fab onClick={handle}><AddIcon/> </Fab></div>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
