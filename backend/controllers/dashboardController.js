const asyncHandler = require("express-async-handler");
const Dashboard = require("../models/Dashboard");

const getDashboard = asyncHandler(async (req, res) => {
  const filters = [];
  const response = {
    list: [],
  };

  filters.push({
    key: "topic",
    label: "Topic",
    list: await Dashboard.distinct("topic"),
  });

  filters.push({
    key: "country",
    label: "Country",
    list: await Dashboard.distinct("country"),
  });

  filters.push({
    key: "region",
    label: "Region",
    list: await Dashboard.distinct("region"),
  });

  filters.push({
    key: "end_year",
    label: "End year",
    list: await Dashboard.distinct("end_year"),
  });

  filters.push({
    key: "sector",
    label: "Sector",
    list: await Dashboard.distinct("sector"),
  });

  filters.push({
    key: "pestle",
    label: "Pestle",
    list: await Dashboard.distinct("pestle"),
  });

  filters.push({
    key: "source",
    label: "Source",
    list: await Dashboard.distinct("source"),
  });

  if (Object.keys(req.query).length > 0) {
    response.list = await Dashboard.find(req.query);
  } else {
    response.list = await Dashboard.find();
  }

  response.filters = filters;
  res.status(200).json(response);
});

module.exports = {
  getDashboard,
};
