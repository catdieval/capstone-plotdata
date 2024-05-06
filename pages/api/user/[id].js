import dbConnect from "../db/connect";
import User from "../db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  const user = await User.findById(id);

  if (request.method === "GET") {
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    } else {
      return response.status(200).json(user);
    }
  }
}
