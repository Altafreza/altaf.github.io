import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Checkbox from "@mui/material/Checkbox";
import { FavoriteBorder } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import { customStyle } from "./styles";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./theme";

function App() {
  const btnStyle = {
    bgcolor: "green",
    color: "black",
  };

  return (
    <>
      <h1>Text Button</h1>
      <Button>Click Me</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="primary" href="https://google.com">
        Link
      </Button>
      <Button disabled>Disabled</Button>

      <h1>Contained Button</h1>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
      <Button variant="contained" color="primary" href="https://google.com">
        Link
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>

      <h1>Outlined Button</h1>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" href="https://google.com" color="primary">
        Link
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>

      <h1>Button Size</h1>
      <Button variant="contained" color="secondary" size="small">
        Small
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        Medium
      </Button>
      <Button variant="contained" color="secondary" size="large">
        Large
      </Button>

      <h1>Button with Icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>
        Delete
      </Button>

      <h1>Icon Button</h1>
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>

      <h1>Custom Button</h1>
      <Button variant="contained" style={{ backgroundColor: "green" }}>
        Custom1
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "pink" }}>
        Custom2
      </Button>

      <h1>Button with Click Event</h1>
      <Button variant="contained" onClick={() => console.log("Button Clicked")}>
        Click Me
      </Button>

      <h1>Button Group</h1>
      <ButtonGroup variant="contained" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>Vertical Button Group</h1>
      <ButtonGroup variant="contained" color="secondary" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>Floating Action Button</h1>
      <Fab color="secondary">R</Fab>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="secondary">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab disabled>
        <FavoriteIcon />
      </Fab>

      <h1>Checkbox</h1>
      <Checkbox />
      <Checkbox checked />
      <Checkbox checked={true} color="success" />
      <Checkbox defaultChecked indeterminate />
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} />
      <Checkbox onChange={() => console.log("Checked Done")} />
      <FormControlLabel control={<Checkbox />} label="India" />
      <FormControlLabel
        control={<Checkbox />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="End"
        labelPlacement="end"
      />

      <h1>Radio Button</h1>
      <Radio value="male" name="radio-button" />
      <Radio value="female" name="radio-button" />
      <FormControlLabel control={<Radio />} label="Female" />
      <FormControlLabel control={<Radio />} label="Top" labelPlacement="top" />
      <FormControlLabel
        control={<Radio />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Radio />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel control={<Radio />} label="End" labelPlacement="end" />
      <RadioGroup row>
        <FormControlLabel control={<Radio />} label="Male" />
        <FormControlLabel control={<Radio />} label="Female" />
        <FormControlLabel control={<Radio />} label="Other" />
      </RadioGroup>

      <h1>Rating</h1>
      <Rating />
      <Rating value={3} readOnly />
      <Rating defaultValue={2.5} precision={0.5} />

      <h1>Slider</h1>
      <Slider />
      <Slider value={5} color="secondary" />
      <Slider defaultValue={30} color="secondary" />
      <Box sx={{ height: 300 }}>
        <Slider orientation="vertical" defaultValue={30} color="secondary" />
      </Box>

      <h1>Switch</h1>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
      <FormControlLabel control={<Switch />} label="Dark" />

      <h1>Text Field</h1>
      <TextField inputMode="ahhhh" />
      <TextField label="Name" />
      <TextField label="Standard" variant="standard" />
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />

      <h1>Box</h1>
      <Box>Hello World</Box>

      <h1>Stack</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Click Me</Button>
        <Button variant="contained" color="secondary">
          Click Me
        </Button>
        <Button variant="contained" color="primary" href="https://google.com">
          Link
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Stack>

      <h1>These are System Key/Props</h1>
      <h1>Alignment</h1>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>

      <h1>Font Weight</h1>
      <Box fontWeight="bold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>

      <h1>Font Size</h1>
      <Box fontSize={24}>Hello</Box>

      <h1>Font Style</h1>
      <Box fontStyle="italic">Hello</Box>

      <h1>Color</h1>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>

      <h1>Background Color</h1>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>

      <h1>Margin</h1>
      <Box m={10}>All Side Margin</Box>
      <Box mt={10}>Margin Top</Box>
      <Box mb={10}>Margin Bottom</Box>
      <Box ml={10}>Margin Left</Box>
      <Box mr={10}>Margin Right</Box>
      <Box mx={10}>Margin Left Right</Box>
      <Box my={10}>Margin Top Bottom</Box>

      <h1>Padding</h1>
      <Box p={10}> All Side Padding</Box>
      <Box pt={10}>Padding Top</Box>
      <Box pb={10}>Padding Bottom</Box>
      <Box pl={10}>Padding Left</Box>
      <Box pr={10}>Padding Right</Box>
      <Box px={10}>Padding Left Right</Box>
      <Box py={10}>Padding Top Bottom</Box>

      <h1>Width Sizing</h1>
      <Box width={1 / 4} bgcolor="red">
        Width 1/4
      </Box>
      <Box width={1} bgcolor="green">
        Width 100%
      </Box>
      <Box width="50%" bgcolor="yellow">
        Width 50%
      </Box>
      <Box width={500} bgcolor="pink">
        Width 500px
      </Box>

      <h1>Height Sizing</h1>
      <Box height="50%" bgcolor="yellow">
        Height 50%
      </Box>
      <Box height={500} bgcolor="pink">
        Height 500px
      </Box>

      <h1>Border</h1>
      <Stack spacing={4}>
        <Box border={1}>Hello 1</Box>
        <Box borderTop={1}>Hello 2</Box>
        <Box borderBottom={1}>Hello 3</Box>
        <Box borderLeft={1}>Hello 4</Box>
        <Box borderRight={1}>Hello 5</Box>
      </Stack>

      <Stack spacing={4}>
        <Box border={0}>Hello 1</Box>
        <Box border={1} borderTop={0}>
          Hello 2
        </Box>
        <Box border={1} borderBottom={0}>
          Hello 3
        </Box>
        <Box border={1} borderLeft={0}>
          Hello 4
        </Box>
        <Box border={1} borderRight={0}>
          Hello 5
        </Box>
      </Stack>

      <h1>Border Color</h1>
      <Box border={1} borderColor="secondary.main">
        Hello
      </Box>

      <h1>Border Radius</h1>
      <Box border={1} borderRadius="50%" width={300} height={300}></Box>
      <Box border={1} borderRadius={16} width={300} height={300}></Box>

      <h1>Avatar</h1>
      <Avatar>H</Avatar>
      <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
      <Avatar>
        <DeleteIcon />
      </Avatar>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg"
        />
      </AvatarGroup>

      <h1>Badge</h1>
      <Stack spacing={4} direction="row">
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="success" max={40}>
          <MailIcon />
        </Badge>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={100}
          color="primary"
          max={50}
        >
          <MailIcon />
        </Badge>
        <Badge color="primary" variant="dot">
          <MailIcon />
        </Badge>
      </Stack>

      <h1>Chip</h1>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip label="Clickable" onClick={() => console.log("Chip Clicked")} />
        <Chip
          label="Deletable"
          onDelete={() => console.log("Chip Delete Clicked")}
        />
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
        <Chip
          avatar={
            <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
          }
          label="Avatar Chip"
        />
      </Stack>

      <h1>Divider</h1>
      <Divider />
      <Divider orientation="vertical" />
      <Divider>CENTER</Divider>
      <Divider textAlign="left">LEFT</Divider>

      <h1>List</h1>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>

      <h1>Table</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">Sonam</TableCell>
              <TableCell align="right">101</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell align="right">Rahul</TableCell>
              <TableCell align="right">102</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h1>Tooltip</h1>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <h1>Typography</h1>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h6">Heading H6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>

      <h1>Alert</h1>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>

      <h1>Progress</h1>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <LinearProgress />
      <LinearProgress color="secondary" />

      <h1>Skeleton</h1>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />

      <h1>Accordion</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>

      <h1>App Bar</h1>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <h1>Grid</h1>
      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            1
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            2
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            4
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} direction="row">
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            1
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            2
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            4
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            1
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            2
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            3
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">
                  1-1
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="blue" p={5} textAlign="center">
                  1-2
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">
                  1-3
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            2
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">
                  4-1
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="yellow" p={5} textAlign="center">
                  4-2
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">
                  4-3
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <h3>Paper</h3>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper elevation={9}>
            <Box p={5} textAlign="center">
              1
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined">
            <Box p={5} textAlign="center">
              2
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            4
          </Box>
        </Grid>
      </Grid>

      <h3>Card</h3>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card>
            <CardHeader title="Card hai ye" subheader="September 14, 2016" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Material UI 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Material UI 2
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            4
          </Box>
        </Grid>
      </Grid>

      <h1>Customization</h1>
      <Button variant="contained" color="secondary">
        Hello
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "red", color: "black" }}
      >
        Hello
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "blue", color: "yellow" }}
      >
        Hello
      </Button>
      <Button variant="contained" sx={{ bgcolor: "yellow", color: "black" }}>
        Hello
      </Button>
      <Button variant="contained" sx={btnStyle}>
        Hello
      </Button>
      <Button variant="contained" sx={customStyle.btnNew}>
        Hello
      </Button>

      <ThemeProvider theme={customTheme}>
        <Button variant="contained" color="secondary">
          Hello
        </Button>
        <Button variant="contained" color="mycolor">
          Hello
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
