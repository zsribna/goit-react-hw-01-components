import React from "react"
import { FriendItem } from "./FriendItem/FriendItem"
import styles from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.FriendList}>
            {friends.map((friend) => (
                <FriendItem friend={friend}/>
            ))}
        </ul>
    )
}