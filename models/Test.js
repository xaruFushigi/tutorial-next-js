import { Schema, model, models } from "mongoose";

const TestSchema = new Schema({
  name: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
});

const Test = models.Test || model("Test", TestSchema);

export default Test;
