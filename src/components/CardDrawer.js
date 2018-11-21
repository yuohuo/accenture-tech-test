import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    list: {
      width: 640,
      "& > li": {
        display: "flex",
        "& > div:first-child": {
          maxWidth: "25%"
        },
        "& > div:last-child": {
          flex: 1
        }
      }
    },
    header: {
      height: 64,
      padding: "4px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& h1": {
        fontSize: 32
      },
      "& > button": {
        marginRight: -8
      }
    }
  };

  /**
 * Component to render the drawer to display card detail info
 * 
 */
class CardDrawer extends React.PureComponent {
  close = () => {
    this.props.toggleCard(null);
  };

  // render drawer header
  renderHeader() {
    const { classes, card } = this.props;
    return (
      <div className={classes.header}>
        <Typography variant="headline" component="h1">
          {card.coreData.number}
        </Typography>
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Add to shopping cart"
          onClick={this.close}
        >
          <CloseIcon />
        </IconButton>
      </div>
    );
  }

  // render one list item
  renderListItem(text, value) {
    return (
      <ListItem>
        <ListItemText primary={text} />
        <Input value={value} inputProps={{ "aria-label": text }} />
      </ListItem>
    );
  }

  renderServiceData() {
    const serviceData = this.props.card.serviceData;
    return Object.keys(serviceData).map((key, i) => {
      return (
        <ListItem key={i}>
          <ListItemText primary={key} />
          <Input value={serviceData[key]} inputProps={{ "aria-label": key }} />
        </ListItem>
      );
    });
  }

  render() {
    const { card, classes } = this.props;
    return (
      <Drawer anchor="right" open={!!card} onClose={this.close}>
        {card && (
          <div>
            {this.renderHeader()}
            <List className={classes.list} component="nav">
              {this.renderListItem("Assigned To", card.coreData.assignee)}
              {this.renderListItem("Short Description", card.coreData.shortDescription)}
              {this.renderListItem("Application", card.coreData.application)}
              {this.renderServiceData()}
            </List>
          </div>
        )}
      </Drawer>
    );
  }
}

CardDrawer.propTypes = {
  card: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardDrawer);
