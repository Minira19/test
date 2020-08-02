import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
 },

}))
export default function Offers() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid container direction="column">
   
      </Grid>
    </Container>
  )
}
