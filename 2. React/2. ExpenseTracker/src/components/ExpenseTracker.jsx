import '../styles/ExpenseTracker.css';
import {ShowBalance}  from './ShowBalance';
import {AddDetails} from './AddDetails';
import {ExpensesDetail} from './ExpensesDetail';
import { useState } from 'react';

export default function ExpenseTracker(){
    const[formData, setFormData] = useState({
        description: "",
        amount: "",
        category: "Income"
    });
    const [transactionList, setTransactions] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        setTransactions((prev) => [...prev, formData]);

        setFormData({
            description: "",
            amount: "",
            category:"Income",
        });
    };
    const removeBtn = (index) =>{
        setTransactions((prev) =>  prev.filter((transaction, ind) => ind !== index))
    }
    
    return(
        <div className='ExpenseTracker'>
            <ShowBalance transactionList = {transactionList}/>
            <AddDetails formData = {formData} onChange = {handleInputChange} onSubmit={handleSubmit}/>
            <ExpensesDetail transactionList = {transactionList} removeBtn = {removeBtn}/>
        </div>
    );
}