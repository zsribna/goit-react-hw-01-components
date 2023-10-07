import React from "react"
import styles from "./Profile.module.css"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={styles.Profile}>
            <div className={styles.Description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.Avatar}
                />
                <p className={styles.Username}>{username}</p>
                <p className={styles.desc}>@{tag}</p>
                <p className={styles.desc}>{location}</p>
            </div>
            
            <ul className={styles.Stats}>
                <li className={styles.Stat}>
                    <span className={styles.Label}>Followers</span>
                    <span className={styles.Quantity}>{stats.followers}</span>
                </li>
                <li className={styles.Stat}>
                    <span className={styles.Label}>Views</span>
                    <span className={styles.Quantity}>{stats.views}</span>
                </li>
                <li className={styles.Stat}>
                    <span className={styles.Label}>Likes</span>
                    <span className={styles.Quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}