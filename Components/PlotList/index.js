import useSWR from "swr";
import Heading from "../Heading";

export default function PlotList() {
  const { data: plot, isLoading } = useSWR("/api/Plot");

  console.log(plot);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!plot) {
    return;
  }
  return (
    <>
      <Heading>Your Plots:</Heading>
      <h2>{plot.clickedChartType}</h2>
    </>
  );
}
