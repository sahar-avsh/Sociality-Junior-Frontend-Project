import React from "react";
import classes from "./Card.module.css";
import Icon from "./Icon";
// This component gets the necessary information from CardList.js component and renders a single Card(a card that describes a social media post)

// Creating a function for a single card with all the required feature
const Card = (props) => {
  // Creating a function for handling a broken image situation
  function addDefaultSrc(ev) {
    const broken = require("../no-post-image.png");
    ev.target.src = broken;
  }

  return (
    /**************************************************** GENERAL AREA *************************************************/
    // Creating the main container of the card
    <div className={`${props.className} ${classes.container}`}>
      <div
        /**************************************************** LEFT SIDE (COLORED AREA) *************************************************/
        /* Creating the side section of the card(Place with specific color and the social media icon) */
        id="side"
        className={`${classes.side} 
          ${
            // Here we check the status of the card, and based on that gives the proper color to the side bar
            props.status === 0
              ? classes["need-approval"]
              : props.status === 1
              ? classes.scheduled
              : props.status === 2
              ? classes.error
              : props.status === 3
              ? classes.published
              : classes.notes
          }
            `}
      >
        {/* Here we call the Icon.js component and give it the value, which is the name of related social media, as well as giving it the default style for each icon */}
        <Icon value={props.channel} className={classes.channelIcon} />
      </div>
      {/**************************************************** MAIN CONTENT GENERAL AREA *************************************************/}
      {/* Creating the main contents of the card */}
      <div id="main" className={classes.main}>
        {/****************************************************** HEADER *************************************************************/}
        {/* Creating the header of the card which contains time of publishing, as well as editing section */}
        <div className={classes.header} id="header">
          {/* Creating the date and time of publishing each post */}
          <div id="time" className={classes.time}>
            {/* Getting the publishing date and time information, from CardList.js component */}
            <small>{props.published_at}</small>
          </div>
          {/* Creating the editing section for the header */}
          <div id="actions" className={classes.actions}>
            {/* Based on the card's status(published, scheduled,...) the editing buttons verify, that's why we need to get the status information from CardList.js in order to set the necessary editing icons */}
            {props.status === 0 && (
              // If status is 0, it means this post needs approval, so we call the Icon.js component and give it the proper value, as well as giving the general style for all the editing action icons
              <Icon value="action-approve" className={classes.actionItems} />
            )}
            {props.status === 1 && (
              // If status is 0, it means this post has been scheduled for posting, so we call the Icon.js component and give it the proper value, as well as giving the general style for all the editing action icons
              <Icon value="action-decline" className={classes.actionItems} />
            )}
            {/* For rest of stuses, the editing section looks the same, they would only have deleting and menu icons, so we just call the Icon.js component 2 times and give it the proper values, as well as giving the general style for all the editing action icons */}
            <Icon value="action-delete" className={classes.actionItems} />
            <Icon value="action-menu" className={classes.actionItems} />
          </div>
        </div>
        {/******************************************************* MIDDLE AREA *************************************************************/}
        {/* Creating the middle part of the card(message and image) */}
        <div className={classes.content} id="content">
          {/* Crearing the general section for the message of each card */}
          <p className={classes.message}>
            {/* Getting informtion about the card's message from the CardList.js component */}
            <b>{props.message}</b>
          </p>
          {/* Displaying the image */}
          <img
            width="285"
            height="285"
            className={classes.image}
            // Calling a function to present a No Image display, in case the image is broken
            onError={addDefaultSrc}
            // Getting the image source from CardList.js component
            src={props.imageSrc}
            alt="contentImage"
          ></img>
        </div>
        {/****************************************************** FOOTER *************************************************************/}
        {/* Creating the footer part of the card that containes likes, shares... icons */}
        <div className={classes.footer} id="footer">
          {/* creating the general area for the stat icons such as Likes, shares, comments and views*/}
          <div className={classes.stats}>
            {/* Calling Icon.js components, in order to display the LIKE icon */}
            <Icon value="footer-likes" className={classes.statsIcon} />
            {/* Getting the data for number of likes from CardList.js component */}
            <span className={classes.statsValue}>{props.stats.likes}</span>
          </div>
          {/* creating the general area for the stat icons such as Likes, shares, comments and views*/}
          <div className={classes.stats}>
            {/* Calling Icon.js components, in order to display the COMMENT icon */}
            <Icon value="footer-comments" className={classes.statsIcon} />
            {/* Getting the data around COMMENTS from CardList.js component */}
            <span className={classes.statsValue}>{props.stats.comments}</span>
          </div>
          {/* creating the general area for the stat icons such as Likes, shares, comments and views*/}
          <div className={classes.stats}>
            {/* Calling Icon.js components, in order to display the SHARE icon */}
            <Icon value="footer-shares" className={classes.statsIcon} />
            {/* Getting the data about number of SHARES from CardList.js component */}
            <span className={classes.statsValue}>{props.stats.shares}</span>
          </div>
          {/* creating the general area for the stat icons such as Likes, shares, comments and views*/}
          <div className={classes.stats}>
            {/* Calling Icon.js components, in order to display the VIEW icon */}
            <Icon value="footer-views" className={classes.statsIcon} />
            {/* Getting the data about number of VIEWS from CardList.js component */}
            <span className={classes.statsValue}>{props.stats.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
