import * as React from "react";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Paper } from "@mui/material";

import "../styles/JobCard.min.css";
import JobDescription from "./JobDescription";

function JobCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper square={false} className="job-card">
      <div className="job-info">
        <CardContent>
          <Box sx={{ display: "flex", gap: "5px", margin: 0 }}>
            <Avatar  variant="rounded" src={props.job.logoUrl} />
            <div className="company-details">
              <div className="company-info">
                <Typography variant="body2" className="company-name">
                  {props.job.companyName}
                </Typography>
                <Typography varient="body1" className="company-job">
                 {props.job.jobRole}
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
            Estimated Salary: {props.job.minJdSalary} - {props.job.maxJdSalary}{" "} {props.job.salaryCurrencyCode}
          </Typography>
          <div className="job-description">
            <Typography variant="body1" component="p">
              About Company
            </Typography>
            <div className="job-content">
              {props.job.jobDetailsFromCompany}
            </div>
          </div>
          <Button onClick={handleOpen} variant="text" className="show-more-btn">
            Show More
          </Button>
          <JobDescription open={open} handleClose={handleClose} jobDetailsFromCompany={props.job.jobDetailsFromCompany} />
          <div>
            <Typography varient="body2" component="h3">
              Minimum Experience
            </Typography>
            <Typography variant="body2" component="h2">
            {props.job.minExp} - {props.job.maxExp} years
            </Typography>
          </div>
          <Button className="apply-btn" variant="contained"
          onClick={window.open(props.job.jdLink, "_blank")}
          >
            Apply Now
          </Button>
        </CardContent>
      </div>
    </Paper>
  );
}

export default JobCard;
