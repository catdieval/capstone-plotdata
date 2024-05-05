import useSWR from "swr";
import { useRouter } from "next/router";

export default function PlotCard() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/Plot/${id}`);

  //   console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h2>{data.clickedChartType}</h2>
      <p>
        Your Data: {data.xVariable} {data.yVariable}
      </p>
      <p>Your settings: {data.settings}</p>
    </>
  );
}
