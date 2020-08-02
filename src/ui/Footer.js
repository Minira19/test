import React from 'react'
import Link from '../Link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#1D1D1D',
    width: '100%',
  },
  bottomFooter: {
    background: '#1D1D1D',
    height:'76px'
  },
  bottomFooterContainer: {
    width: '80%',
    margin:'auto' 
  },
  topFooter: {
    background: '#151515',
    heigth:'365px'
  },
   topFooterContainer: {
    width: '80%',
     margin: 'auto',
    paddingTop:'82px'
  },
  bottomFooterImg: {
    height: '24px',
    width: '332px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    color:'#E4E4E4'
  },
  unorderedList: {
    listStyleType: 'none',
    padding:0
  },
  ulMainItem: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:' bold',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.625px',
    paddingBottom:'16px',
    color: '#E4E4E4'
  },
   ulItem: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:' 500',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.625px',
    paddingBottom:'16px',
    color: '#E4E4E4'  
  },
  footerIcon: {
    width: '269px',
    height: '72px',
    display: 'flex',

  },
  companyMainName: {
    color: '#8D6723',
    fontSize: '49px',
    fontWeight: 500,
    marginRight:'3px'
  },
  companyName: {
    color: '#8D6723',
    fontSize: '18px',
    fontWeight:600
  },
  footerIconBorder: {
    paddingTop: '5.34px',
    position: 'absolute',
    left: '11.39%',
    right: '83.61%',
  },
  footerIconTypography:{
    width: 'auto',
    position: 'absolute',
    left: '17%',
    top:'36%'
  },
  iconALetter: {
    marginLeft: '26px',
    marginTop:'23px'
  },
  iconZletter: {
    position:'absolute',
    marginTop: '23px',
    right:'85.05%'
  }
  ,
  footMenuIcons: {
    backgroundColor: '#8D6723',
    padding: '5.82px',
    borderRadius: '50%',
    marginRight: '38px',
    display: 'flex',
    alignItems:'center'
  },
  footIcons: {
    paddingTop: '60px',
    paddingBottom:'57px'
  }
}))
export default function Footer(props) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
        <Grid container direction="column">
        <Grid container className={classes.topFooter}>
         <Grid container className={classes.topFooterContainer}>
            <Grid container>
              <Grid item lg={4}>
                <Grid className={classes.footerIcon} container>
                  <Grid style={{ width: 'auto' }} container>
                    <img className={classes.footerIconBorder} src="fill.png"></img>
                    <Grid item>
                      <img className={classes.iconALetter}  src="aLetter.png"></img>
                      <img className={classes.iconZletter}  src="zLetter.png"></img>
                  </Grid>
                  </Grid>
                  <Grid className={classes.footerIconTypography} container direction="column">
                    <Grid  item>
                      <img className={classes.companyMainName} src="f-letter.png"></img>
                      <img className={classes.companyMainName} src="r-letter.png"></img>
                      <img className={classes.companyMainName} src="a-letter.png"></img>
                      <img className={classes.companyMainName} src="z-letter.png"></img>
                      <img className={classes.companyMainName} src="e-letter.png"></img>
                      <img className={classes.companyMainName} src="xLetter.png"></img>
                    </Grid>
                    <Grid className={classes.companyName} item>from A to Z experience</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={2}>
                <ul className={classes.unorderedList}>
                  <li className={classes.ulMainItem} >Services</li>
                  <li className={classes.ulItem} >Text</li>
                  <li className={classes.ulItem} >Text</li>
                  <li className={classes.ulItem} >Text</li>
              </ul>
              </Grid>
              <Grid item lg={2}>
               <ul className={classes.unorderedList}>
                  <li className={classes.ulMainItem} >Products </li>
                  <li className={classes.ulItem} >Text</li>
                  <li className={classes.ulItem} >Text</li>
                  <li className={classes.ulItem} >Text</li>
              </ul>
              </Grid>
              <Grid item lg={2}>
                 <ul className={classes.unorderedList}>
                  <li className={classes.ulMainItem} >Portfolio</li>
                  <li className={classes.ulItem} >Text</li>
                  <li className={classes.ulItem} >Text</li>
                  <li className={classes.ulItem} >Text</li>
              </ul>
              </Grid>
              <Grid item lg={2} >
                  <ul className={classes.unorderedList}>
                  <li className={classes.ulMainItem} >Contact Copy</li>
                  <li className={classes.ulItem} >office@frazex.com </li>
                  <li className={classes.ulItem} >(+994) 55 285 28 28</li>
                  <li>
                    <ul className={classes.unorderedList}>
                      <li className={classes.ulItem} >Aliyar Aliyev ave.,</li>
                      <li className={classes.ulItem} >52a, Baku, AZ1052</li>
                    </ul>
                  </li>
              </ul>
              </Grid>
            </Grid>
            <Grid container className={classes.footIcons}>
              <Grid item className={classes.footMenuIcons}>
             <InstagramIcon></InstagramIcon>
              </Grid>
              <Grid item className={classes.footMenuIcons}>
                <TwitterIcon></TwitterIcon>
              </Grid>
              <Grid item className={classes.footMenuIcons}>
                <FacebookIcon></FacebookIcon>
              </Grid>
          </Grid>
          </Grid>
          </Grid>
        <Grid container className={classes.bottomFooter}>
          <Grid container className={classes.bottomFooterContainer}>
            <img className={classes.bottomFooterImg} src="allrights.png"></img>
          </Grid>
        </Grid>
        </Grid>

    </footer>
  )
}
