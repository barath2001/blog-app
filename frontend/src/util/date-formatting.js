const formatDate = (ISODate) => {
  const date = new Date(ISODate);

  let dt = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return dt + " - " + month + " - " + year;
};

export { formatDate };
