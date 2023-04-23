const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,
  impact: Number,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  sources: String,
  title: String,
  likelihood: Number,
});

// const DashboardModel = mongoose.model("dashboard", DashboardSchema);
// module.exports = DashboardModel;
module.exports = mongoose.model("Dashboard", DashboardSchema);

