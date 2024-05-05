import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import JobCard from "components/JobCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "store/actions";

function JobPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useSelector((state) => state.onFetch);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
      dispatch(fetchData(page))
    
  }, [page, dispatch]); 

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((page) => page + 1);
  }

  return (
    <>
    <h1>Hii</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 12 }}
      >
        {data.map((job, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      {isPending && (
        <Typography variant="h1">
          Loading
        </Typography>
      )}
    </>
  );
}

export default JobPage;
