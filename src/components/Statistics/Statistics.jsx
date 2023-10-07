import React from "react"
import styles from "./Statistics.module.css"

export const Statistics = ({ stats }) => {
    return (
        <section className={styles.Statistics}>
            <h2 className={styles.Title}>Upload stats</h2>
            
            <ul className={styles.StatList}>
                {stats.map((stat) => (
                    <li className={styles.Item} key={stat.id}>
                        {stat.label && (
                            <span className={styles.Label}>{stat.label}</span>
                        )}
                        <span className={styles.Percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}