import React from 'react'
import Button from '@material-ui/core/Button';
class Paginator extends React.Component {
    onBackward = () => {
      this.props.changePage(this.props.viewer.currentPage - 1)
    }
     onForward = () => {
      this.props.changePage(this.props.viewer.currentPage + 1)
    }
     render() {
      const { viewer, classes } = this.props
      if (viewer.cardCount < 0) {
        return (
          <div className={classes.container}>
            <LinearProgress className={classes.linearProgress} color="primary"/>
          </div>
        )
      }

      return <div className={classes.container}>
      <Button onClick={this.onBackward}>Back</Button>
      <span style={{ width: 300, display: 'inline-block' }}>
        {`Page ${viewer.currentPage + 1} of ${parseInt(viewer.cardCount / 12, 10)}`}
      </span>
      <Button onClick={this.onForward}>Forward</Button>
    </div>
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
 export default withStyles(styles)(PaginationControls); 