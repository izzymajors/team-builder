import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Form from './component/Form'

const intialFormValues = {
  name:"",
   email:"",
    role:"",
}



 function App() {
const [teamMemberList, setTeamMemberList] = useState({})
const [formValues, setFormValues] = useState(intialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue,
  });
}

const submitForm =(evt) =>{
  evt.preventDefault();
  const newTeamMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }

if (newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
  return;
}

setTeamMemberList([...teamMemberList, newTeamMember]);
setFormValues(intialFormValues);


};


  return (
    <div className="App">
      <h1>Member List</h1>
      <Form
      values={formValues}
      update={updateForm} 
      submit={submitForm}
      />
    </div>

  );
}

export default App;
