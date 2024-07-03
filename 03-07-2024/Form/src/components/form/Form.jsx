import styles from './form.module.css'
import { useState } from 'react'


function Form() {
    const [input, setInput] = useState(
        {
            first_name: '',
            last_name: '',
            email: '',
            general_enquiry: '',
            support_request: '',
            message: '',
            consent: ''
        }
    );

    function handleChange(e) {
        const value = e.target.value;
        const tag = e.target.id;
        setInput((prevState) => ({ ...prevState, [tag]: value }));
    }

    return (
        <>
            <div className={styles.card}>
                <h2>First Name: </h2>
                <h3>{input.first_name}</h3>
                <h2>Last Name: </h2>
                <h3>{input.last_name}</h3>
                <h2>Email Address: </h2>
                <h3>{input.email}</h3>
                <h2>General enquiry: </h2>
                <h3>{input.general_enquiry}</h3>
                <h2>Support request: </h2>
                <h3>{input.support_request}</h3>
                <h2>Message: </h2>
                <p>{input.message}</p>
                <h2>Check consent: </h2>
                <h3>{input.consent}</h3>
            </div>

            <form className={styles.contact_form} action="submit_form.php" method="post">
                <h2>Contact Us</h2>
                <div className={styles.first_line}>
                    <div className={styles.input_half}>
                        <label htmlFor="first-name">First Name *</label>
                        <input onChange={handleChange} type="text" id="first_name" name="first_name" required />
                    </div>
                    <div className={styles.input_half}>
                        <label htmlFor="last-name">Last Name *</label>
                        <input onChange={handleChange} type="text" id="last_name" name="last_name" required />
                    </div>
                </div>
                <div className={styles.second_line}>
                    <label htmlFor="email">Email Address *</label>
                    <input onChange={handleChange} type="email" id="email" name="email" required />
                </div>
                <div className={styles.third_line}>
                    <label htmlFor="query-type">Query Type *</label>
                    <div className={styles.radio_group}>
                        <label>
                            <input onChange={handleChange} type="radio" id="general_enquiry" name="query_type" value="general-enquiry" required /> General Enquiry
                        </label>
                        <label>
                            <input onChange={handleChange} type="radio" id="support_request" name="query_type" value="support-request" required /> Support Request
                        </label>
                    </div>
                </div>
                <div className={styles.fourth_line}>
                    <label htmlFor="message">Message *</label>
                    <textarea onChange={handleChange} id="message" name="message" rows="4" required></textarea>
                </div>
                <div className={styles.fifth_line}>
                    <input onChange={handleChange} type="checkbox" id="consent" name="consent" value="Allows" required />
                    <label htmlFor="consent">I consent to being contacted by the team *</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form