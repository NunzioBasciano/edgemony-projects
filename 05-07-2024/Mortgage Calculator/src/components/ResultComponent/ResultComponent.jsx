import styles from './resultComponent.module.css';

// Funzione per formattare il numero nel formato inglese
function formatResult(number) {
    const formatNumber = Intl.NumberFormat('en-US').format(number);
    return formatNumber;
};

// Componente per visualizzare i risultati del calcolo del mutuo
function ResultComponent(input, totalRate, totalMortgage, totalMortgageInterest, isSubmitted) {

    // Se il form non è stato ancora inviato, mostra una sezione predefinita
    if (!isSubmitted) {
        return (
            <div className={styles.default_section}>
                <img className={styles.default_section_image} src="../.././public/images/illustration-empty.svg" alt="calculator-img" />
                <h2 className={styles.result_title}>Result shown here</h2>
                <p className={styles.result_paragraph}> Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
        )
    }
    // Se il form è stato inviato, mostra i risultati del calcolo
    return (
        <div className={styles.result_section}>
            <h2 className={styles.result_title}>Your results</h2>
            <p className={styles.result_paragraph}>Your result is shown below based on the information you provided. To adjust the result, edit the form and click "Calculate repayments" again.</p>
            <div className={styles.result_container}>

                {/* Se il tipo di mutuo è "repayment" e totalRate è disponibile, mostra il pagamento mensile e il totale da rimborsare. */}
                {input.mortgage_type === 'repayment' && totalRate && (
                    <>
                        <h3 className={styles.result_secondary_heading}>Your monthly repayments</h3>
                        <h1 className={styles.result_repayment}>£ {formatResult(totalRate.toFixed(2))}</h1>
                        <hr />
                        <h3 className={styles.result_secondary_heading}>Total you'll repay over the term</h3>
                        <h1 className={styles.result_repayment}>£ {formatResult(totalMortgage.toFixed(2))}</h1>
                    </>
                )}
                {/* Se il tipo di mutuo è "interest-only" e totalMortgageInterest è disponibile, mostra solo il totale degli interessi da rimborsare. */}
                {input.mortgage_type === 'interest-only' && totalMortgageInterest && (
                    <>
                        <h3 className={styles.result_secondary_heading}>Total you'll repay over the term</h3>
                        <h1 className={styles.result_repayment}>£ {formatResult(totalMortgageInterest.toFixed(2))}</h1>
                    </>
                )}
            </div>
        </div>
    )
}

export default ResultComponent;