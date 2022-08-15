import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../redux/redux-hooks/hooks';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { allowAccess, handleModal } from '../../redux/userReducer';



type Props = {
    switchForm:boolean;
    setSwitchForm:React.Dispatch<React.SetStateAction<boolean>>;
}

interface Register {
    name:string;
    lastName:string;
    email:string;
    password:string;
}

export const Register = ({switchForm, setSwitchForm}:Props) => {

    const [userRegister, setUserRegister] = useState<Register>({
        name:"",
        lastName:"",
        email:"",
        password:""
    })
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [registerError, setRegisterError] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { name, lastName, email, password } = userRegister

  
    const handleSubmit = async(e:React.FormEvent<EventTarget>) => {
        e.preventDefault()
       try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(user,{
                displayName:name
            })
            navigate("/home")
            dispatch(handleModal())
            dispatch(allowAccess(user.displayName))
            setSwitchForm(false)
        } catch (error) {
            console.log(error)
            setRegisterError(true)
        }
        setUserRegister({
            name:"",
            lastName:"",
            email:"",
            password:""
        })
    }

   
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "email"){
            const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            setEmailError(emailPattern.test(e.target.value))
            
        }
        if(e.target.name === "password"){
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/=._])[A-Za-z\d@$!%*?&#/=._]{8,}$/
            setPasswordError(passwordPattern.test(e.target.value))
        }

        setUserRegister(prev => ({...prev, [e.target.name]:e.target.value}))}

    const switchFormComponent = ():void => {
        setSwitchForm(!switchForm)
      }
 

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <legend style={{
                    fontSize:"2rem",
                    fontWeight:"bold",
                    marginBottom:"3rem",
                    textAlign:"center"
                    }}>Registration Form</legend>
                    {
                        registerError && <p style={{color:"red", fontSize:"1.4rem"}}>Email already in use</p>
                    }
                <div className='form_input'>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleInputChange}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={handleInputChange}/>
                </div>
                <div className='form_input'> 
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" value={email} onChange={handleInputChange}/>
                    {
                        !emailError && <small style={{color:"red", fontSize:"1.4rem"}}>Enter a valid email</small>
                    }
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange}/>{
                        !passwordError && 
                        (<ul style={{color:"red", fontSize:"1.4rem"}}>
                            <li>Must have at least 8 characters</li>
                            <li>It must includes at least 1 uppercase letter</li>
                            <li>It must includes at least 1 lowercase letter</li>
                            <li>It must includes at least 1 number letter</li>
                            <li>It must includes at least 1 special character (@$!%*?&#/=._) letter</li>
                        </ul>)
                    }  
                </div>
                <button type='submit'>Submit</button>

                <p style={{textAlign:"center"}}>or</p>
              
                <div>
                    <p style={{textDecoration:"underline"}} onClick={() => switchFormComponent()}>Have an account already?</p>
                </div>
        </form>
    </div>
  )
}

