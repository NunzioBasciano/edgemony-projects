import styles from './form.module.css';
/* import images from '../../../public/images/calculator.jpg' */


function Form({ input, setInput, handleSubmit }) {

    const inputDefault = {
        mortgage_amount: '',
        mortgage_term: '',
        interest_rate: '',
        mortgage_type: ''
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function clear() {
        setInput(inputDefault);
        setTotalRates(null);
        setTotalMortgage(null);
        setTotalMortgageInterest(null);
        setIsSubmitted(false);
    }

    return (
        <>
            <div className={styles.form_section}>
                <div className={styles.form_title_container}>
                    <h2>Mortgage Calculator</h2>
                    <a onClick={clear} href="#">Clear All</a>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.form_Mortgage_amount}>
                        <label htmlFor="mortgage-amount">Mortgage Amount</label>
                        <span className={styles.form_input_container}>
                            <div className={styles.form_input_placeholder}>£</div>
                            <input onChange={handleChange} className={styles.form_input} type="number" placeholder="" name="mortgage_amount" value={input.mortgage_amount} />
                        </span>
                    </div>
                    <div className={styles.form_term_rate}>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="mortgage-term">Mortgage Term</label>
                            <span className={styles.form_input_container}>
                                <input onChange={handleChange} className={styles.form_input} type="number" placeholder="" name="mortgage_term" value={input.mortgage_term} />
                                <div className={styles.form_input_placeholder}>years</div>
                            </span>
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
                    <span className={styles.form_button}>
                        <img src='../../../public/images/calculator.svg' alt="calculator-image" />
                        <input className={styles.form_input} type="submit" value='Calculate Repayments' />
                    </span>
                </form>
            </div>
        </>
    );
}

export default Form;