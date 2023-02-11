import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="phone">
                  <label className="form__label" for="phone">Phone Number </label>
                  <input className="form__input" type="text"  id="password" placeholder="Phone Number"/>
              </div>
              <div className="address">
                  <label className="form__label" for="address">Address </label>
                  <input className="form__input" type="text" id="confirmPassword" placeholder="Address"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">ADD MEMBER</button>
          </div>
          <div class="view">
            <button type="button" class="btn">VIEW MEMBERS</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;