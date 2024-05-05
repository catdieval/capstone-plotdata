import dbConnect from "../../../db/connect";
import Plot from "../../../db/models/Plot";

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;

  if (request.method === "GET") {
    const plot = await Plot.findById(_id);

    if (!plot) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(plot);
  }
}
