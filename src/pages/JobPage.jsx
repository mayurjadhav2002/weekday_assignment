import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import JobCard from "components/JobCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "store/actions";

function JobPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((page) => page + 1); 
  }

  useEffect(() => {
    dispatch(fetchData(page));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, dispatch]);

  const { data = [], isPending, error } = useSelector((state) => state.onFetch);

  return (
    <>
      helo
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 12 }}
      >
        {data?.map(
          (
            job,
            index 
          ) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <JobCard job={job} />
            </Grid>
          )
        )}
      </Grid>
        {isPending && 
        <Typography variant="h1">
          Loading
        </Typography>
        }
    </>
  );
}

export default JobPage;
