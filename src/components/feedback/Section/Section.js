import React from 'react';
import PropTypes from 'prop-types';

import s from "./Section.module.css";

export default function Section({ title, children }) {
    return (
        <div className={s.containerHeading}>
            {<h2 className={s.heading}>{title}</h2>}
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};