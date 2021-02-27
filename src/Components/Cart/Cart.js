import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    /*let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population
    }*/
    const totalSalary = cart.reduce((sum, user) => sum + user.salary, 0)
    return (
        <aside className="sidebar col-md-4 ps-5">
            <div style={{backgroundColor:'#f1f1f1'}} className="sticky-top p-3">
                <h1 className='text-success'>People Added: {cart.length}</h1>
                <ul className="list-group my-4">
                    {
                        cart.map((user) => <li key={user.id} className="list-group-item"><h3>{user.firstName + user.lastName} - {user.salary}$</h3></li>)
                    }
                </ul>
                <div className="d-grid">
                    <h2 className='py-3 text-success'>Total Salary(Annual): {totalSalary} $</h2>
                </div>
            </div>
        </aside>
    );
};

export default Cart;
