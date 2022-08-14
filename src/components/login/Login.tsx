import React, { ChangeEvent, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/redux-hooks/hooks';
import { allowAccess } from '../../redux/userReducer';

type Props = {
  switchForm:boolean;
  setSwitchForm:React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

interface Login {
  email:string;
  password:string;
}

export const Login = ({switchForm, setSwitchForm, setIsModalOpen}:Props) => {

  const [userLogin, setUserLogin] = useState<Login>({
    email:"",
    password:""
})
  const [loginError, setLoginError] = useState<boolean>(false)
  const { email, password } = userLogin
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUserLogin(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async(e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(allowAccess(user.displayName))
      navigate("/home")
      setIsModalOpen(false)
    } catch (error) {
      console.log(error)
      setLoginError(true)
    }
    setUserLogin({
      email:"",
      password:""
    })
  }

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
                    }}>Login</legend>
                {
                    loginError && <small style={{color:"red", fontSize:"1.4rem"}}>Invalid email or password</small>
                }
                <div className='form_input'>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" value={email} onChange={handleInputChange}/>
                </div>
                <div className='form_input'>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange}/>
                </div>
                <button type='submit'>Submit</button>

                <span>or</span>
                <hr />

                <p style={{textDecoration:"underline"}} onClick={() => switchFormComponent()}>Create an account</p>
            <button>Send</button>
        </form>
    </div>
  )
}
