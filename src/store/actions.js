export const fetchData = (offset) => (dispatch) => {
    console.log("offset", offset)
    dispatch({ type: "REQUEST_PENDING" });
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 12,
          offset: offset,
        }),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Response data", data.jdList);
        dispatch({ type: "REQUEST_SUCCESS", payload: data.jdList });
      })
      .catch((err) => {
        console.error("Fetch error", err);
        dispatch({ type: "REQUEST_FAILED", payload: err.message });
      });
  };
  