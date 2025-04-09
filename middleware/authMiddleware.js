import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = asyncHandler(async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided. Try login again." });
  }

  try {
    const decodedToken = jwt.verify(token, "MNSVM@1%653hvbhx6534nmbhd78647");

    const resp = await User.findById(decodedToken.userId).select("isAdmin email role");
    if (!resp) {
      return res.status(401).json({ status: false, message: "User not found." });
    }

    req.user = {
      email: resp.email,
      isAdmin: resp.isAdmin,
      role: resp.role,
      userId: decodedToken.userId,
    };

    next();
  } catch (error) {
    console.error("Authorization error:", error.message);
    return res.status(401).json({ status: false, message: "Not authorized. Try login again." });
  }
});


const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try login as admin.",
    });
  }
};

export { isAdminRoute, protectRoute };
