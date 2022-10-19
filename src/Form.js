import React from 'react'
import './Form.css'
import PhoneImg from './phone.png'
import locationImg from './location.png'
import messageImg from './message.png'


function Form() {
    return (
        <div className='mainDiv'>
            <div className='leftDiv'>
                <h2 className='signUp'>Sign Up</h2>
                <form className=''>
                    <div className='formInner'>
                        <label>Name</label><br/>
                        <input type='text' placeholder="Enter Your name Here"/></div>
                    <div className='formInner'>
                        <label>Email</label><br/>
                        <input type='email' placeholder="Enter Your name Here"/></div>
                    <div className='formInner'>
                        <label>Password</label><br/>
                        <input type='password' placeholder="Enter Your name Here"/></div>
                    <button className='createButton'>Create Account</button>
                    <p className='or'>OR</p>
                    <button className='loginButton'>Log In</button>
                </form>
            </div>
            <div className='rightDiv'>
                <div className='rightInnerDiv'>
                    <h1>Any queries</h1>
                    <div className='icons'>
                        <div className='icon'><img className='img'
                                src={messageImg}/>
                            <p>Email</p>
                        </div>
                        <div className='icon'><img className='img'
                                src={locationImg}/>
                            <p>Contact</p>
                        </div>
                        <div className='icon'><img className='img'
                                src={PhoneImg}/>
                            <p>Contact</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
