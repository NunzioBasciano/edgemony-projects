import styles from './form.module.css';

// Componente Form per gestire l'inserimento dei dati del mutuo
function Form({ input, setInput, handleSubmit }) {

    // Viene chiamata ogni volta che l'utente modifica un input.
    function handleChange(e) {

        // Dichiara due variabili per gestire l'input name e value. ovvero const name = e.target.name e const value = e.target.value.
        const { name, value } = e.target;

        // Viene modificata la variabile "input" con i nuovi valori inseriti dall'utente.
        setInput((prevState) => ({

            // Ricopia dell'oggetto "input" con i nuovi valori inseriti dall'utente.
            ...prevState,
            [name]: value,
        }));
    }

    //Resetta tutti i campi del form e i risultati.
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
        </>
    );
}

export default Form;