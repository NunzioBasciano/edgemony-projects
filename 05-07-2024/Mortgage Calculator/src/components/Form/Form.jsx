import styles from './form.module.css';
import { useState } from 'react';

function getInterest(interestRate, mortgage_amount) {
    return parseFloat(mortgage_amount * interestRate / 100);
}

function getTotal(mortgage_amount, interest) {
    return parseFloat(mortgage_amount) + parseFloat(interest);
}

function getRates(total, mortgage_term) {
    return parseFloat(total / mortgage_term / 12);
};

function Form() {

    const inputDefault = {
        mortgage_amount: '',
        mortgage_term: '',
        interest_rate: '',
        mortgage_type: ''
    }

    const [input, setInput] = useState(inputDefault);
    const [totalRate, setTotalRates] = useState(null);
    const [totalMortgage, setTotalMortgage] = useState(null);
    const [totalMortgageInterest, setTotalMortgageInterest] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function clear() {
        setInput(inputDefault);
        setTotalRates(null);
        setTotalMortgage(null);
        setTotalMortgageInterest(null);
        setIsSubmitted(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.mortgage_amount !== '' && input.mortgage_term !== '' && input.interest_rate !== '' && input.mortgage_type !== '') {
            const interest = getInterest(input.interest_rate, input.mortgage_amount);
            const total = getTotal(input.mortgage_amount, interest);
            const rate = getRates(total, input.mortgage_term);
            setTotalMortgage(total);
            setTotalMortgageInterest(interest);

            if (input.mortgage_type === 'repayment') {
                setTotalRates(rate);
            } else {
                setTotalRates(null);
            }
            setIsSubmitted(true);
        } else {
            alert('Please fill in all fields');
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <>
            <div className={styles.form_section}>
                <div className={styles.form_title_container}>
                    <h2>Mortgage Calculator</h2>
                    <a onClick={clear} href="#" className="clear-link">Clear All</a>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.form_Mortgage_amount}>
                        <label htmlFor="mortgage-amount">Mortgage Amount</label>
                        <input onChange={handleChange} className={styles.form_input} type="number" placeholder="£" name="mortgage_amount" value={input.mortgage_amount} />
                    </div>
                    <div className={styles.form_term_rate}>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="mortgage-term">Mortgage Term</label>
                            <input onChange={handleChange} className={styles.form_input} type="number" placeholder="years" name="mortgage_term" value={input.mortgage_term} />
                        </div>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="interest-rate">Interest Rate</label>
                            <input onChange={handleChange} className={styles.form_input} type="number" placeholder="%" name="interest_rate" value={input.interest_rate} />
                        </div>
                    </div>
                    <div className={styles.form_mortgage_type}>
                        <label>Mortgage Type</label>
                        <label className={styles.form_radio_input}>
                            <input onChange={handleChange} type="radio" name="mortgage_type" value="repayment" /> Repayment
                        </label>
                        <label className={styles.form_radio_input}>
                            <input onChange={handleChange} type="radio" name="mortgage_type" value="interest-only" /> Interest Only
                        </label>
                    </div>
                    <input className={styles.form_button} type="submit" value='Calculate Repayments' />
                </form>
            </div>
            {!isSubmitted ? (
                <div className={styles.default_section}>
                    <img className={styles.default_section_image} src="../.././public/images/illustration-empty.svg" alt="calculator-img" />
                    <h2 className={styles.result_title}>Result shown here</h2>
                    <p className={styles.result_paragraph}> Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
                </div>
            ) : (
                <div className={styles.result_section}>
                    <h2 className={styles.result_title}>Your results</h2>
                    <p className={styles.result_paragraph}>Your result is shown below based on the information you provided. To adjust the result, edit the form and click "Calculate repayments" again.</p>
                    <div className={styles.result_container}>
                        {input.mortgage_type === 'repayment' && totalRate && (
                            <>
                                <h3 className={styles.result_secondary_heading}>Your monthly repayments</h3>
                                <h1 className={styles.result_repayment}>£ {totalRate.toFixed(2)}</h1>
                                <hr />
                                <h3 className={styles.result_secondary_heading}>Total you'll repay over the term</h3>
                                <h1 className={styles.result_repayment}>£ {totalMortgage.toFixed(2)}</h1>
                            </>
                        )}
                        {input.mortgage_type === 'interest-only' && totalMortgageInterest && (
                            <>
                                <h3 className={styles.result_secondary_heading}>Total you'll repay over the term</h3>
                                <h1 className={styles.result_repayment}>£ {totalMortgageInterest.toFixed(2)}</h1>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Form;