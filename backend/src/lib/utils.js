import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 100, //milisek
    httpOnly: true, // present XSS attack
    sameSite: "strict", // CSRF attack cross site request forgery
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
