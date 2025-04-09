import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, "MNSVM@1%653hvbhx6534nmbhd78647", {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, 
    sameSite: "none",
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
  });
};

export default createJWT;
