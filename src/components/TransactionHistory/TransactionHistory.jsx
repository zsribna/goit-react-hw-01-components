import React from "react"
import styles from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className={styles.Type}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}