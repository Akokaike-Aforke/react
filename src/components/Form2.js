import { useState } from "react";

function Form2()
{
    const[formData, setFormData] = useState({
        names: "",
        password: "",
        confirmPassword: "",
        signUp: false
    });
    console.log(formData.password)
    function handleChange(event)
    {
        const{name, value, type, checked} = event.target;
        setFormData(form2 => 
            {return{...form2,   
                   [name]: type === "checkbox" ? checked : value}})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        formData.password === formData.confirmPassword ? console.log("Successfully signed up") : console.log("Passwords do not match"); return;
        formData.signUp ? console.log("Thanks for signing up to our newleter"): console.log("");
    }
    return(
        <div className="form2">
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                type="text"
                placeholder="name"
                name="names"
                value={formData.names}
                className="input1"
                />

                <input 
                className="input2"
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                />

                <input 
                className="input3"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                />
                
                <div className="check">
                <input 
                type="checkbox"
                name="signUp"
                id="signUp"
                checked={formData.signUp}
                onChange={handleChange}
                />
                <label htmlFor="signUp">I want to join the newsletter</label>
                </div>

                <button className="buttonForm">Sign up</button>
            </form>
        </div>
    )
}
export default Form2;