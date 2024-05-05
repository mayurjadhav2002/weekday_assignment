import * as React from "react";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Paper } from "@mui/material";

import "../styles/JobCard.min.css";
import JobDescription from "./JobDescription";

function JobCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper square={false} className="job-card">
      <div className="job-info">
        <CardContent>
          <Box sx={{ display: "flex", gap: "5px", margin: 0 }}>
            <Avatar>W</Avatar>
            <div className="company-details">
              <div className="company-info">
                <Typography variant="body2" className="company-name">
                  Company Name
                </Typography>
                <Typography varient="body1" className="company-job">
                  Software Developer
                </Typography>
              </div>

              <Typography
                variant="body2"
                paragraph
                className="company-location"
              >
                Banglore
              </Typography>
            </div>
          </Box>
          <Typography varient="body2">
            Estimated Salary: 10 - 20 LPA{" "}
          </Typography>
          <div className="job-description">
            <Typography variant="body1" component="p">
              About Company
            </Typography>
            <div className="job-content">
              ```Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Commodi, quam totam! Deserunt perferendis animi beatae, amet
              ipsum, voluptatum obcaecati aliquid vitae, quod ipsam perspiciatis
              dolorem qui neque consequatur sequi. Neque. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Commodi, quam totam! Deserunt
              perferendis animi beatae, amet ipsum, voluptatum obcaecati aliquid
              vitae, quod ipsam perspiciatis dolorem qui neque consequatur
              sequi. Neque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Commodi, quam totam! Deserunt perferendis animi beatae, amet
              ipsum, voluptatum obcaecati aliquid vitae, quod ipsam perspiciatis
              dolorem qui neque consequatur sequi. Neque.```
            </div>
          </div>
          <Button onClick={handleOpen} variant="text" className="show-more-btn">
            Show More
          </Button>
          <JobDescription open={open} handleClose={handleClose} />
          <div>
            <Typography varient="body2" component="h3">
              Minimum Experience
            </Typography>
            <Typography variant="body2" component="h2">
              1 years
            </Typography>
          </div>
          <Button className="apply-btn" variant="contained">
            Apply Now
          </Button>
        </CardContent>
      </div>
    </Paper>
  );
}

export default JobCard;
