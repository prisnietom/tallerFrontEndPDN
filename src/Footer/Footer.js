import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

const style = theme => ({
	root: {
            flexGrow: 1,
        },
    container:{
        background: 'linear-gradient(#5489ba 0%, #32485e 100%)',
    height: 80,
    padding: '0 30px',

    },
    space: {
            flexGrow: 1,
        },
    toolbar: {
            maxWidth: 1200,
        },    
    item2: {
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        

        },
    whiteText:{
            color: theme.palette.white
        }


});

class Footer extends React.Component{

    render() {
        const {classes} = this.props;

        return (
             <Grid container className={classes.container}>
                 <Grid item xs={6} className={classes.item2}>
                 <Typography className={classes.whiteText}>
  <Link href="https://seseatabasco.org.mx/" target="_blank">
    Secretaría Ejecutiva del Sistema Estatal Anticorrupción Tabasco                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Tabasco
  </Link>                                                                                                                                                           
  
</Typography>
                 </Grid>
                 <Grid item xs={6}className={classes.item2}>

                 </Grid>
               </Grid>

		)

    }
}

export default (withStyles(style)(Footer));