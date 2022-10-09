import React, { useReducer } from "react";
import classes from "./SideBar.module.css";
import Icon from "./Icon";

const expandReducer = (state, action) => {
  if (action) {
    const initial = {};
    for (const [key, val] of Object.entries(state))
      action.type !== key
        ? (initial[key] = val)
        : (initial[action.type] = action.value);
    return initial;
  }
  return {
    summary: false,
    publish: false,
    engage: false,
    listen: false,
    report: false,
  };
};

const accountReducer = (state, action) => {
  if (action) {
    const initial = {};
    for (const [key, value] of Object.entries(state))
      action.type === key ? (initial[key] = true) : (initial[key] = false);
    return initial;
  }
  return {
    meta: false,
    nike: false,
    heat: true,
  };
};

const SideBar = (props) => {
  const [expandState, dispatchExpandState] = useReducer(expandReducer, {
    summary: false,
    publish: false,
    engage: false,
    listen: false,
    report: false,
  });
  const summaryExpandHandler = () => {
    dispatchExpandState({ type: "summary", value: !expandState.summary });
  };
  const publishExpandHandler = () => {
    dispatchExpandState({ type: "publish", value: !expandState.publish });
  };
  const engageExpandHandler = () => {
    dispatchExpandState({ type: "engage", value: !expandState.engage });
  };
  const listenExpandHandler = () => {
    dispatchExpandState({ type: "listen", value: !expandState.listen });
  };
  const reportExpandHandler = () => {
    dispatchExpandState({ type: "report", value: !expandState.report });
  };

  const [accountState, dispatchAccountState] = useReducer(accountReducer, {
    meta: false,
    nike: false,
    heat: true,
  });

  const metaClickHandler = () => {
    dispatchAccountState({ type: "meta" });
    props.activeAccount("meta");
  };

  const nikeClickHandler = () => {
    dispatchAccountState({ type: "nike" });
    props.activeAccount("nike");
  };

  const heatClickHandler = () => {
    dispatchAccountState({ type: "heat" });
    props.activeAccount("heat");
  };

  return (
    <div id="container" className={`${classes.container} ${props.className}`}>
      <header className={classes.header}>
        <b>sociality</b>.io
      </header>
      <div id="content" className={classes.content}>
        <div id="brands" className={classes.brands}>
          <div className={classes.wrap}>
            <div className={accountState.meta ? classes.active : ""}></div>
            <div
              className={`${classes.logo} ${classes.meta}`}
              onClick={metaClickHandler}
            >
              <div className={!accountState.meta ? classes.inactive : ""}></div>
            </div>
          </div>

          <div className={classes.wrap}>
            <div className={accountState.nike ? classes.active : ""}></div>
            <div
              className={`${classes.logo} ${classes.nike}`}
              onClick={nikeClickHandler}
            >
              <div className={!accountState.nike ? classes.inactive : ""}></div>
            </div>
          </div>

          <div className={classes.wrap}>
            <div className={accountState.heat ? classes.active : ""}></div>
            <div
              className={`${classes.logo} ${classes.heat}`}
              onClick={heatClickHandler}
            >
              <div className={!accountState.heat ? classes.inactive : ""}></div>
            </div>
          </div>
        </div>

        <div id="menu" className={classes.menu}>
          <ul className={classes.mainMenu}>
            <li>
              <Icon value="sidebar-notifs" />
              NOTIFICATIONS <span className={classes.pill}>26</span>
            </li>
            <li className={expandState.summary ? classes.expanded : ""}>
              <Icon value="sidebar-summary" />
              SUMMARY
              {expandState.summary ? (
                <Icon
                  value="sidebar-minus"
                  onClick={summaryExpandHandler}
                  className={classes.expand}
                />
              ) : (
                <Icon
                  value="sidebar-plus"
                  onClick={summaryExpandHandler}
                  className={classes.expand}
                />
              )}
            </li>
            <li className={expandState.publish ? classes.expanded : ""}>
              <Icon value="sidebar-publish" />
              PUBLISH
              {expandState.publish ? (
                <Icon
                  value="sidebar-minus"
                  onClick={publishExpandHandler}
                  className={classes.expand}
                />
              ) : (
                <Icon
                  value="sidebar-plus"
                  onClick={publishExpandHandler}
                  className={classes.expand}
                />
              )}
            </li>
            <ul
              className={`${classes.subMenu} ${
                expandState.publish ? classes.showSubMenu : ""
              }`}
            >
              <li>
                <Icon value="sidebar-dot" />
                Compose
              </li>
              <li>
                <Icon value="sidebar-dot" />
                Feed
              </li>
            </ul>
            <li className={expandState.engage ? classes.expanded : ""}>
              <Icon value="sidebar-engage" />
              ENGAGE
              {expandState.engage ? (
                <Icon
                  value="sidebar-minus"
                  onClick={engageExpandHandler}
                  className={classes.expand}
                />
              ) : (
                <Icon
                  value="sidebar-plus"
                  onClick={engageExpandHandler}
                  className={classes.expand}
                />
              )}
            </li>
            <li className={expandState.listen ? classes.expanded : ""}>
              <Icon value="sidebar-listen" />
              LISTEN
              {expandState.listen ? (
                <Icon
                  value="sidebar-minus"
                  onClick={listenExpandHandler}
                  className={classes.expand}
                />
              ) : (
                <Icon
                  value="sidebar-plus"
                  onClick={listenExpandHandler}
                  className={classes.expand}
                />
              )}
            </li>
            <li className={expandState.report ? classes.expanded : ""}>
              <Icon value="sidebar-report" />
              REPORT
              {expandState.report ? (
                <Icon
                  value="sidebar-minus"
                  onClick={reportExpandHandler}
                  className={classes.expand}
                />
              ) : (
                <Icon
                  value="sidebar-plus"
                  onClick={reportExpandHandler}
                  className={classes.expand}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
