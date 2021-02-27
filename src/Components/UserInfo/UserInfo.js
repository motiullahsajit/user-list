import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const UserInfo = (props) => {
    const { firstName, lastName, title, email, phone, address, salary, profileImage, country } = props.user
    const handleAddCountry = props.handleAddCountry;

    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="w-100" src={profileImage} alt={firstName} />
                </div>
                <div className="col-md-5">
                    <div className="card-body ps-5">
                        <h2 className="card-title">{title} {firstName} {lastName}</h2>
                        <h5>Form: {country}</h5>
                        <h5>Address: {address}</h5>
                        <h5>Email: {email}</h5>
                        <h5>Phone: {phone}</h5>
                        <h5>Anual Salary: {salary}</h5>
                        <button disabled={isClicked} onClick={() => {
                            handleAddCountry(props.user)
                            setIsClicked(true)
                        }} className='btn btn-success'> <FontAwesomeIcon icon={faUserPlus} className='me-1' />{isClicked ? "✓ Already Added" : "Add Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;