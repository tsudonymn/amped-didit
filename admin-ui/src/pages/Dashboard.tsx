import * as React from "react";
import { Title } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core/";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function dashBoard() {
  function sayIt(name: String) {
    alert(`Did ${name}`);
  }
  const classes = useStyles();
  const data = [
    {
      name: "fish",
      desc: "fed the fish",
      img: "https://picsum.photos/345/300?random=1"
    },
    {
      name: "mail",
      desc: "get the mail",
      img: "https://picsum.photos/345/300?random=2"
    },
    {
      name: "dish",
      desc: "dishes",
      img: "https://picsum.photos/345/300?random=3"
    },
    {
      name: "laundry",
      desc: "laundry",
      img: "https://picsum.photos/345/300?random=4"
    }
  ];
  return (
    <div className={classes.root}>
      <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Welcome</CardContent>
      </Card>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={elem.name}
                  height="140"
                  image={elem.img}
                  title={elem.name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    sayIt(elem.name);
                  }}
                >
                  Did it!
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
