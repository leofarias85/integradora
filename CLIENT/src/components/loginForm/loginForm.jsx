
import style from "./loginForm.module.css"
import {useState} from "react"


function validate (user){
    let errors= {}
    if (!user.email){
        errors.email= "Enter your email"
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/.test(user.email)){
   errors.email= "email invalido"
    }
    if  (user.email.length>=35){
        errors.email= "email invalido"
    }
    if (!/\d/.test (user.password)){
        errors.password= "la contraseña debe contener un numero"
    }
    if (user.password.length<6 ||user.password.length>10){
        errors.password= "la contraseña debe estar comprendia entre los 6 los 10 caracteres"
    }
    return errors
}

function LoginForm ({login}){
    const [user, setUser]=  useState({
        email: "",
        password: "",
    })


const [errors, setErrors]= useState ({email: "", password: ""})



function handleChange(e) {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })



setErrors (validate({
    ...user, [e.target.name]: e.target.value,
}))
}
function handleSubmit (e){
    e.preventDefault (user);
    if (!errors.email && !errors.password) {
        login (user)}
        else {
            alert ("data incorrecta")
        }

    }


    return (
        <div className= {style.formContainer}>
            <div className={style.formTitle}>
            <h1>Fill your credential</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={ style.credentials}>
                <label>Username</label>
                <input  type="text" placeholder="username@gmail" name="email" value= {user.name} onChange={handleChange}/>
                {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={style.credentials}>
                    <laber>Password</laber>
                    <input type="password" name="password" value={user.password} onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit" className={style.submitBtn}>LOGIN</button>
                </form>
                </div>

    
    ) } 

export default LoginForm