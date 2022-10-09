import React, { Fragment } from "react";
import classes from "./CardList.module.css";
import Card from "./Card";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = function (givenDate, isHeader = true) {
  if (isHeader) {
    const d = new Date(givenDate);
    return [d.getDate(), months[d.getMonth()], d.getFullYear()].join(" ");
  } else {
    const d = new Date(givenDate);
    return [
      d.getDate(),
      months[d.getMonth()],
      d.getFullYear(),
      "-",
      d.getHours().toString().padStart(2, "0"),
      ":",
      d.getMinutes().toString().padStart(2, "0"),
    ].join(" ");
  }
};

const CardList = (props) => {
  return (
    <Fragment>
      {Object.entries(props.info.posts_by_date).map(([date, posts]) => {
        return (
          <Fragment key={date + "-fragment"}>
            <p key={date} className={classes.date}>
              {formatDate(date)}
            </p>
            <div className={classes.row} key={date + "-div"}>
              {posts.map((post, index) => (
                <div
                  key={date + "-post-div-" + index}
                  className={classes.posts}
                >
                  <Card
                    className={classes.card}
                    status={post.status}
                    published_at={formatDate(post.published_at, false)}
                    message={post.entry.message}
                    imageSrc={post.entry.image}
                    channel={post.account.channel}
                    stats={{ likes: 0, comments: 0, shares: 0, views: 0 }}
                  />
                </div>
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CardList;
