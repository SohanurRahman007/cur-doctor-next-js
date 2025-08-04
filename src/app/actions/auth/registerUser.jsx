"use server";

import { collectionNameObj, dbConnect } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  // ✅ Await dbConnect
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const { email, password } = payload;

  // ✅ Basic validation
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  // ✅ Check if user exists
  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  // ✅ Insert new user
  const result = await userCollection.insertOne(payload);

  return { success: true, data: result };
};
