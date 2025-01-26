import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    // Ensure you have COMMENT cookie-parser middleware enabled in your Express app
    const token = req.cookies?.jwt; // Safely access `jwt` from cookies

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if decoding was successful
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    // Find the user by ID (ensure the token includes `userId`)
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach the user object to the request for downstream handlers
    req.user = user;

    // Pass control to the next middleware
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
