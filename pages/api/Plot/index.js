import dbConnect from "../../../db/connect";
import Plot from "../../../db/models/Plot";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plot = await Plot.find();
    return response.status(200).json(plot);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
