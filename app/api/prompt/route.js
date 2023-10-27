import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";
import Test from "@models/Test";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("FAILED", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const test = await Test.find({});
    return new Response(JSON.stringify(test), { status: 200 });
  } catch (error) {
    return new Response("FAILED", { status: 500 });
  }
};
