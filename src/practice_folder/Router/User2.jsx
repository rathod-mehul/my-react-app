import React from 'react'
// import Sidebar from '../../layouts/Sidebar'
// import Navbar from '../../layouts/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, multiplyAmount } from '../Redux/CounterSlice';

export default function User2() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Redux Count {count}</h1>
            <button className='btn' onClick={() => dispatch(increment())}>+</button>
            <button className='btn' onClick={() => dispatch(decrement())}>-</button>
            <button className='btn' onClick={() => dispatch(incrementByAmount(5))}>increment By Amount</button>
            <button className='btn' onClick={() => dispatch(multiplyAmount(2))}>increment By Amount</button>
            {/* <header>
                <Sidebar />
                <Navbar />
            </header>
            <main style={{ marginTop: "58px" }}>
                <div className="container pt-4"> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            {/* </div>
            </main> */}
        </>
    )
}
