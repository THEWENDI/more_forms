import React, {useState} from 'react'

const Form = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault(); // only for onSubmit
        const newUser = {firstname, lastname, email, password,conpassword} // create the user
        console.log(newUser)
    }    

    

    return (
        <div>
            <h1> MORE FORM</h1>
            <form onSubmit={handleSubmit}>
                <p><div>
                    <label> First Name : </label>
                    <input name="firstname" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                    {
                        firstname.length<2 && firstname.length>0?
                            <p> First Name must be at least 2 characters</p>:
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Last Name: </label>
                    <input name="lastname" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                    {
                        lastname.length<2 && lastname.length>0?
                            <p> Last Name must be at least 2 characters</p>:
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Email : </label>
                    <input name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {
                        email.length<2 && email.length>0?
                            <p> Email must be at least 2 characters</p>:
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Password : </label>
                    <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {
                        password.length<8 && password.length>0?
                            <p> Password must be at least 8 characters</p>:
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Confirm Password : </label>
                    <input name="conpassword" type="password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)}/>
                    {
                        password !== conpassword && conpassword.length>0?
                        <p> Password must match</p>:
                        ""
                    }
                </div></p>
            </form>

            

        </div>
    )
}

export default Form