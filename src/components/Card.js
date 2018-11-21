import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Truncate from 'react-truncate'
import { withStyles } from "@material-ui/core/styles";

// ============================================================================
// Component to render a specific card
// ============================================================================
// Props:
// - cardData: data object of the card
// - toggleCard: action creator to set selected card
// - classes: JSS styles
// ============================================================================
class card extends React.Component {
  state = { raised: false };
  onButtonClick = () => {
    this.props.toggleCard(this.props.cardData);
  };

  onMouseEnter = () => {
    this.setState({ raised: true });
  };

  onMouseLeave = () => {
    this.setState({ raised: false });
  };

  render() {
    const { classes, cardData } = this.props;
    const coreData = cardData && cardData.coreData;

    return coreData ? (
      // render loaded card
      <Card
        raised={this.state.raised}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onButtonClick}
        className={classes.card}
      >
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary">
            {coreData.state}
          </Typography>
          <Typography variant="headline" component="h2">
            {coreData.number}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Application: {coreData.application}
            <br />
            Assignee: {coreData.assignee}
          </Typography>
          <Typography component="p">
            <Truncate lines={2}>{coreData.shortDescription}</Truncate>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.onButtonClick} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ) : (
      // render card to be fetched
      <Card className={classes.card}>
        <CardContent className="content">
          <CircularProgress
            className={classes.progress}
            size={50}
            color="primary"
          />
        </CardContent>
      </Card>
    );
  }
}

card.propTypes = {
  cardData: PropTypes.object.isRequired,
  toggleCard: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const styles = {
  card: {
    height: 240,
    overflow: "hidden",
    maxWidth: 275,
    margin: 5,
    transition: "all 0.15s",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer"
    },
    "& > .content": {
      width: 275,
      padding: 0,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    "& > :not(:last-child)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }
};

export default withStyles(styles)(card);
