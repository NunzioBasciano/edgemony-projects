import styles from './form.module.css';

function Form({ input, setInput, handleSubmit, setTotalRates, setTotalMortgage, setTotalMortgageInterest, setIsSubmitted }) {

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
                        <span className={styles.form_input_container_amount}>
                            <div className={styles.form_input_placeholder_left}>£</div>
                            <input onChange={handleChange} className={styles.form_input_left} type="number" placeholder="" name="mortgage_amount" value={input.mortgage_amount} />
                        </span>
                    </div>
                    <div className={styles.form_term_rate}>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="mortgage-term">Mortgage Term</label>
                            <div className={styles.form_input_container}>
                                <input onChange={handleChange} className={styles.form_input_right} type="number" placeholder="" name="mortgage_term" value={input.mortgage_term} />
                                <span className={styles.form_input_placeholder_right}>years</span>
                            </div>
                        </div>
                        <div className={styles.form_term_rate_item}>
                            <label htmlFor="interest-rate">Interest Rate</label>
                            <div className={styles.form_input_container}>
                                <input onChange={handleChange} className={styles.form_input_right} type="number" placeholder="" name="interest_rate" value={input.interest_rate} />
                                <span className={styles.form_input_placeholder_right}>%</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form_mortgage_type}>
                        <label>Mortgage Type</label>
                        <label className={styles.form_radio_input}>
                            <input className={styles.input_type} onChange={handleChange} type="radio" name="mortgage_type" value="repayment" /><label className={styles.mortgage_type_radio_label} htmlFor="">Repayment</label>
                        </label>
                        <label className={styles.form_radio_input}>
                            <input className={styles.input_type} onChange={handleChange} type="radio" name="mortgage_type" value="interest-only" /><label className={styles.mortgage_type_radio_label} htmlFor="interest-only">interest-only</label>
                        </label>
                    </div>
                    <span className={styles.form_button}>
                        <img src='../../../public/images/calculator.svg' alt="calculator-image" />
                        <input className={styles.form_input_button} type="submit" value='Calculate Repayments' />
                    </span>
                </form >
            </div >
        </>
    );
}

export default Form;