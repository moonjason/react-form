import React, { useState } from 'react';

const FeedbackForm = () => {
    const [form, setForm] = useState({first: "", last: "", email: "", message: ""})
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState();

    const handleChange1 = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleChange2 = (e) => {
        setCount(e.target.value.length);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validateEmail = (email) => {
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(emailFormat)){ 
            return true
        } else {
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(form.email)) {
            return setErrorMsg("Please enter a valid e-mail");
        } else if (form.first.length < 1 || form.last.length < 1 || form.message.length < 1){
            return setErrorMsg("Please fill in missing fields");
        } else {
            setErrorMsg("Success - check console")
        }
        console.log(form)
        fetch(`http://52.15.184.142:80/feedback`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="form-container">
            <div className="feedback-form">
                <form className="form__contents" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="title">Feedback</h1>
                    <input name="first" className="form__input" type="text" placeholder="First Name" onChange={(e) => handleChange1(e)}/>
                    <input name="last" className="form__input" type="text" placeholder="Last Name" onChange={(e) => handleChange1(e)}/>
                    <input name="email" className="form__input" type="email" placeholder="john@example.com" onChange={(e) => handleChange1(e)}/>
                    <textarea name="message" className="textarea__input" placeholder="Message" maxLength="500" cols="50" rows="4" onChange={(e) => handleChange2(e)}/>
                    <p className="characters">{count}/500</p>
                    <p className="error">{errorMsg}</p>
                    <button className="btn__submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FeedbackForm;