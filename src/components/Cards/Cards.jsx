import React from 'react'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..."
  }

  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={4}>
        <Grid item component={Card} xs={12} sm={6} md={3}  className={cx(styles.card, styles.infected)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">Number of confirmed COVID-19 cases</Typography>
            <Typography variant="body2">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid component={Card} xs={12} sm={6} md={3} className={cx(styles.card, styles.recovered)} item>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">Number of recoveries cases from COVID-19</Typography>
            <Typography variant="body2">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid component={Card} xs={12} sm={6} md={3} className={cx(styles.card, styles.deaths)} item>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Fatalities</Typography>
            <Typography variant="h5">
             <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">Number of fatal cases caused by COVID-19</Typography>
            <Typography variant="body2">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards