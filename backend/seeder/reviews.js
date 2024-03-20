const ObjectId = require("mongodb").ObjectId

const reviews = [
    {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 5,
    user: { _id: ObjectId(), name: "Anjali" },
  },
  {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4,
    user: { _id: ObjectId(), name: "Anshika" },
  },
  {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 5,
    user: { _id: ObjectId(), name: "Anuj" },
  },
]

module.exports = reviews