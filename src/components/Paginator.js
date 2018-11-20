import React from 'react'
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core';

class Paginator extends React.Component {
    onBackward = () => {
      this.props.changePage(this.props.viewer.currentPage - 1)
    }
     onForward = () => {
      this.props.changePage(this.props.viewer.currentPage + 1)
    }
     render() {
        const { viewer, classes } = this.props
        const display = viewer.pageCount < 1; //used to fade in controls
        return (
          <div className={classes.container} style={{ opacity: display ? 0 : 1 }}>
            <Button onClick={this.onBackward} disabled={viewer.currentPage === 0}>Back</Button>
            <span style={{ width: 300, display: 'inline-block' }}>
              {`Page ${viewer.currentPage + 1} of ${viewer.pageCount}`}
            </span>
            <Button onClick={this.onForward} disabled={viewer.currentPage + 1 === viewer.pageCount}>Forward</Button>
          </div>
        )
     }
} 
 const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  linearProgress: {
    flexGrow: 1
  }
};
 export default withStyles(styles)(Paginator); 