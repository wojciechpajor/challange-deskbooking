import React from "react";
import "./App.css";
import Search from "./Search";
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Input} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function App() {

  const classes = useStyles();
  return (
      <div className="App">
        <Search></Search>
        <div className="panelStyle">
          <Accordion>
            <AccordionSummary
                expandIcon={<Button variant='contained' color='primary'>CHANGE</Button>}
                aria-controls="panel2a-content"
                id="panel2a-header"

            >
              <Typography className={classes.heading}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="uiStyle">
                  <p className='pStyle' >Name</p>
                  <Input className="iStyle" value="Andrew"></Input>
                  <p className='pStyle'>Email</p>
                  <Input className="iStyle" placeholder='Enter an email'></Input>
                  <Input className="iStyle" placeholder="Password"></Input>
                  <div className='sStyle'>
                    <Button color="secondary" variant='contained' className='saveStyle'>SAVE</Button>
                  </div>

                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

  );
}

export default App;
