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
        
            <h2>Team Member</h2>
        
    
    </div>
</form>
    )
}

