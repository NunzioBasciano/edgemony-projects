import styles from './form.module.css';
import { useState } from 'react'

function Form() {

    const [input, setInput] = useState({
        mortgage_amount: '',
        mortgage_term: '',
        interest_rate: '',
        mortgage_type: ''
    });

    function getInterest(obj) {
        const interest = ((+obj.mortgage_amount * +obj.interest_rate) / 100);
        return interest;
    }

    function getRepayment(obj) {
        const interest = (getInterest(obj));
        const repayment = ((+obj.mortgage_amount + +interest) / +obj.mortgage_term);
        return repayment;
    }


    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
        return input;
    }

    function HandleSubmit(e) {
        if (input.mortgage_amount !== '' && input.mortgage_term !== '' && input.interest_rate !== '' && input.mortgage_type === 'repayment') {
            return getRepayment(input);
        } else if (input.mortgage_amount !== '' && input.mortgage_term !== '' && input.interest_rate !== '' && input.mortgage_type === 'interest-only') {
            return getInterest(input);
        } else {
            alert('Please fill all the fields')
        }
    }


    return (

        <>
            <div className={styles.form_section}>
                <div className={styles.form_title_container}>
                    <h2>Mortgage Calculator</h2>
                    <a href="#" className="clear-link">Clear All</a>
                </div>
                <form className={styles.form}>
                    <div className={styles.form_Mortgage_amount}>
                        <label htmlFor="mortgage-amount">Mortgage Amount</label>
                        <input onChange={handleChange} className={styles.form_input} type="number" id="mortgage-amount" placeholder="£" name="mortgage_amount" />
                    </div>
                    <div className={styles.form_term_rate}>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="mortgage-term">Mortgage Term</label>
                            <input onChange={handleChange} className={styles.form_input} type="number" id="mortgage-term" placeholder="years" name="mortgage_term" />
                        </div>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="interest-rate">Interest Rate</label>
                            <input onChange={handleChange} className={styles.form_input} type="number" id="interest-rate" placeholder="%" name="interest_rate" />
                        </div>
                    </div>
                    <div className={styles.form_mortgage_type}>
                        <label>Mortgage Type</label>
                        <label className={styles.form_radio_input}>
                            <input onChange={handleChange} type="radio" id="repayment" name="mortgage_type" value="repayment" />repayment
                        </label>
                        <label className={styles.form_radio_input}>
                            <input onChange={handleChange} type="radio" id="interest-only" name="mortgage_type" value="interest-only" />Interest Only
                        </label>
                    </div>
                    <button onClick={HandleSubmit} className={styles.form_button} type="button" >Calculate Repayments</button>
                </form >
            </div >
            <div className={styles.result_section}>
                <h2 className={styles.result_title}>Your results</h2>
                <p className={styles.result_paragraph}>Your result are shown below based on the information you provided. To adjust the result, edit the form and click "Calculate repayments" again.</p>
                <div className={styles.result_container}>
                    <h3 className={styles.result_secondary_heading}>Your monthly repayments</h3>
                    <h1 className={styles.result_repayment}></h1>
                    <hr />
                    <h3 className={styles.result_secondary_heading}>Total you'll repay over the term</h3>
                </div>
            </div>
        </>
    )
}


export default Form