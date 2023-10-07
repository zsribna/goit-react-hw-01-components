import React from "react"
import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

export const App = ({ user, data, friends, transactions }) => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};