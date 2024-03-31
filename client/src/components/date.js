const formatDate = (timestamp) => {
  //given unix timestamp, returns corresponding date as a string
  const date = new Date(Number(timestamp) * 1000);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long", // 'long' for full month name
    day: "2-digit",
  });
  return formatter.format(date);
};

export default formatDate;
