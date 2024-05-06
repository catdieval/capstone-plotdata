import useSWR from "swr";
import Heading from "../Heading";

export default function PlotList() {
  const { data, isLoading } = useSWR("/api/Plot");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <>
      <Heading>Your Plots:</Heading>
      <h2>{data.clickedChartType}</h2>
    </>
  );
}
