import React from 'react'
import Grid from '@material-ui/core/Grid'
import MissionBody from '../src/components/Mission/MissionBody'
import {makeStyles} from '@material-ui/core/styles'
//components


export default function Mission(props) {
  return (
    <Grid container direction="column" style={{paddingTop: '57px'}}>
     <MissionBody/>
    </Grid>
  )
}
