const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const contentSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Tour Itinerary"]
    },
    content: String,
    tags: [String],    
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);

const Content = model("Content", contentSchema);

module.exports = Content;
