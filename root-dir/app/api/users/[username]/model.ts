import { client, db } from "../../../mongodb/connection";



export async function fetchUser(username: string) {
  await client.connect();
  try {
    const user = await db.collection("users").findOne({ username });
    return user;
  } catch (error: any) {
    throw error;
  } finally {
    client.close();
  }
}

export async function removeUser(username: string) {
  await client.connect();
  try {
    const deleteSuccess = await db
      .collection("users")
      .deleteOne({ username });
    return deleteSuccess;
  } catch (error: any) {
    throw error;
  } finally {
    client.close();
  }
}

export async function changeUserDetails(username: string, userDetails: any) {
  await client.connect();

 
  const { _id, ...updateFields } = userDetails;

  const updateResult = await db.collection("users").updateOne(
    { username: username },
    {
      $set: updateFields, 
    }
  );

  console.log("Update result:", updateResult);

  if (updateResult.matchedCount === 0) {
    return { error: "No user found with the given username" };
  }

  return db.collection("users").findOne({ username: userDetails.username });
}

