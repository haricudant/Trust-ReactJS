import axios from "axios";

const url = " https://trustbackend.herokuapp.com/trust/getallposts";

const tableUrl = "https://trustbackend.herokuapp.com/client/latestclient";

const visitorUrl = "https://trustbackend.herokuapp.com/client/totalcount";

const visitorsThisMonthUrl =
  "https://trustbackend.herokuapp.com/client/monthcount";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTableData = async () => {
  try {
    const { data } = await axios.get(tableUrl);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getVisitors = async () => {
  try {
    const { data } = await axios.get(visitorUrl);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getVisitorsThisMonth = async () => {
  try {
    const { data } = await axios.get(visitorsThisMonthUrl);

    return data;
  } catch (error) {
    console.error(error);
  }
};
