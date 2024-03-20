const products = [
  {
    name: "Mukesh",
    description:
      "Working since 2010. I am a professional plumber. I have done my work in many cities.",
    count: 1,
    price: 299,
    category: "Plumber",
    images: [
      { path: "/images/products/mukesh.png" },
    ],
    rating: 5,
    reviewsNumber: 2,
    reviews: [],
    attrs: [{ key: "level", value: "expert" }],
  },
  {
    name: "Harish",
    description:
      "Working since 2016. I am a professional Electrician. I have done my work in many cities.",
    count: 1,
    price: 399,
    category: "Electrician",
    images: [
      { path: "/images/products/harish.jpg" },
    ],
    rating: 5,
    reviewsNumber: 2,
    reviews: [],
    attrs: [{ key: "level", value: "experienced" }],
  },
  {
    name: "Ritesh",
    description:
      "Working since 2018. I am a professional plumber. I have done my work in many cities.",
    count: 1,
    price: 499,
    category: "Plumber",
    images: [
      { path: "/images/products/ritesh.jpg" },
    ],
    rating: 4,
    reviewsNumber: 1,
    reviews: [],
    attrs: [{ key: "level", value: "naive" }],
  },
  {
    name: "Suresh",
    description:
      "Working since 2018. I am a professional barber. I have done my work in many cities.",
    count: 1,
    price: 199,
    category: "Barber",
    images: [
      { path: "/images/products/suresh.jpg" },
    ],
    rating: 4,
    reviewsNumber: 1,
    reviews: [],
    attrs: [{ key: "level", value: "naive" }],
  },
]

module.exports = products