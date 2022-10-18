import { useState } from "react";

function Form()
{
    const[formData, setFormData] = useState({
        firstName: '', 
        lastName: '', 
        email: '', 
        textarea:'',
        isFriendly: true,
        employment: "",
        favoriteCol: ""
        });
    // function handleChange(event)
    // {
    //     console.log(event.target.value)
    //     return event.target.value;
    // }
    function handleChange(event)
    {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return{...prevFormData, [name]: type === "checkbox" ? checked : value}
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(formData)
    }
    
   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                onChange={handleChange} 
                type="text" 
                placeholder="First Name" 
                name="firstName"
                value={formData.firstName} 
                />

                <label>Last Name:</label>
                <input 
                onChange={handleChange} 
                type="text" 
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                />

                <label>Email:</label>
                <input
                onChange={handleChange} 
                type="email" 
                placeholder="email"
                name="email"
                value={formData.email}
                />

                <textarea 
                onChange={handleChange}
                placeholder="describe in details"
                name="textarea"
                value={formData.textarea}
                />

                <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>

                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                    type="radio" 
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>

                    <input 
                    type="radio" 
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                    />
                    <label htmlFor="part-time">Part-time</label>

                    <input 
                    type="radio" 
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="full-time">Full-time</label>
                </fieldset>

                <label htmlFor="favoriteCol">Favourite Color:</label>
                <select 
                id="favoriteCol"
                value={formData.favoriteCol}
                onChange={handleChange}
                name="favoriteCol">
                    <option value="">---choose---</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="white">white</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="purple">purple</option>
                </select>

                <button>Submit</button>

            </form>
        </div>
    )
}
export default Form;