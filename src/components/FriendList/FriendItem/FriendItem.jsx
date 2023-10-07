import React from "react"
import { Li, Status, Image, Name } from "./FriendItem.styled.js"

export const FriendItem = ({ friend }) => {
    return (
        <Li key={friend.id}>
            <Status status={friend.isOnline} />
            <Image src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
        </Li>
    )
}