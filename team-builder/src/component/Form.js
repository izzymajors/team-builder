import React from 'react'

export default function Form(props){

    const {values, update, submit} = props;

    const onChange = evt => {

        const {name, values} =evt.target;

        update (name, values)
    }

    const onSubmit =evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>

            <h2>Team Member</h2>


                <label>name
                    <input 
                    type='text'
                    name='name'
                    onChange={onChange}
                    values={values.name}
                    />
                   </label>

                   

                   <label>email
                       <input
                       type='email'
                       email='email'
                       onChange={onChange}
                       value={values.email}
                       placeholder='Type an Email'
                       />
                     </label>

                     <label>role
                         <select>
                             name='role'
                             value={values.role}
                             onChange={onChange}

                             <option value=''>---select role---</option>
                             <option value=''>Team Lead</option>
                             <option value=''>Building Crew</option>
                             <option value=''>Design Crew</option>
                         </select>
                         </label>
        
                    </div>
                    <div className='submit'>
                        <button>Submit</button>

                    </div>
                </form>
               
    )
}

