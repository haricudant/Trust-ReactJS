import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import style from "../Card/card.module.css";
import {
  fetchData,
  getVisitors,
  getVisitorsThisMonth,
} from "../../../api/index";

const Cards = () => {
  const [post, setPost] = useState([]);
  const [visitors, setVistors] = useState("");
  const [visitorsThisMonth, setVisitorsThisMonth] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      setPost(await fetchData());
    };

    const fetchVisitors = async () => {
      setVistors(await getVisitors());
    };

    const fetchVisitorsThisMonth = async () => {
      setVisitorsThisMonth(await getVisitorsThisMonth());
    };

    fetchApi();
    fetchVisitors();
    fetchVisitorsThisMonth();
  }, []);

  return (
    <div className={style.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.Card, style.infected)}
        >
          <CardContent boxShadow={3}>
            <Typography color="textSecondary" gutterBottom>
              Posts
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={post.length}
                duration={1}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2">Number of Posts</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.Card, style.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Visitors
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={visitors} duration={1} seperator="," />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2">Number of Visitors </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.Card, style.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Visitors this month
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={visitorsThisMonth}
                duration={1}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2">
              Number of Visitors this month
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
