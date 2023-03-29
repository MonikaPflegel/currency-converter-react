import React from "react";
import "./style.css";
const Form = (props) => ( <form className=" form">
<fieldset className="form__fieldset">
    <legend className="form__legend">Policz aktualny kurs</legend>
    <p>
        <label>
            <span className="form__labelText">
                Kwota w PLN
            </span>
            <input className=" form__field" type="number" min="1" step="any" value="1" required/>
        </label>
    </p>
    <p>
        <label>
            <span className="form__labelText">
                Waluta
            </span>

            <select className="form__field " required>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>

        </label>
    </p>
</fieldset>
<p>
    <button className="form__button">POLICZ!</button>
</p>

</form>
)
export default Form;
