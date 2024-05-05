import { fetchData } from "store/actions";

export const mapStateToProps = (store) => {
    return {
      dataRes: store.data,
      isPending: store.isPending,
      error: store.error
    };
  };
  

 export const mapDispatchToProps = (dispatch) => {
    return {
      onFetch: (page) => dispatch(fetchData(page))
    };
  };