import React from 'react';

const FeedbackForm = () => {
    return (
        <div className="form-container">
            <div className="feedback-form">
                <form className="form__contents">
                    <h1 className="title">Feedback</h1>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="email"/>
                    <input type="textarea"/>
                </form>
            </div>
        </div>
    )
}

export default FeedbackForm;