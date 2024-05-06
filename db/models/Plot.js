import mongoose from "mongoose";

const { Schema } = mongoose;

const plotSchema = new Schema({
  clickedChartType: { type: String, required: true },
  xVariable: { type: Array, required: true },
  yVariable: { type: Array, required: true },
  settings: { type: Object, required: true },
});

const Plot = mongoose.models.Plot || mongoose.model("Plot", plotSchema);

export default Plot;
