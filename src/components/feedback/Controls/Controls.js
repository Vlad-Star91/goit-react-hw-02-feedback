import React from "react";
import PropTypes from "prop-types";

import s from "./Controls.module.css";


export default function Controls({ options, onLeaveFeedback }) {
    const btnFeedback = Object.keys(options);
    return (
        <div>
            {btnFeedback.map((item) => (
                <button key={Math.random(3)} name={item} type="button" onClick={onLeaveFeedback} className={s.btn}>
                    {item}
                </button>
            ))}
        </div>
    );
}

Controls.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};