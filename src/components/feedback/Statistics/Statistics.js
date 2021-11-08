import React from "react";
import Notification from "../Notification/Notification";
import s from "./Statistics.module.css";

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <div>
            {good || neutral || bad !== 0 ? (
                <ul>
                    <li>
                        <span className={s.good}>Good</span>: {good}
                    </li>
                    <li>
                        <span className={s.neutral}>Neutral</span>: {neutral}
                    </li>
                    <li>
                        <span className={s.bad}>Bad</span>: {bad}
                    </li>
                    <li className={s.total}>Total: {total}</li>
                    <li className={s.positivePercentage}>Positive feedback: {positivePercentage}%{" "}</li>
                </ul>
            ) : (
                <Notification message="No feedback given" />
            )}
        </div>
    );
}