const transactionData = [
    {
      id: 1,
      amount: "1800",
      description: "Complete project report",
      category: "home",
      image: require("../../assets/Mad_Duck.jpg"),
    },
    {
      id: 2,
      amount: "200",
      description: "Watering",
      category: "office",
      image: require("../../assets/Mad_Duck.jpg"),
    },
    {
      id: 3,
      amount: "500",
      description: "Buying eggs",
      category: "misc",
      image: require("../../assets/Mad_Duck.jpg"),
    },
  ];

  export const categories = [
    {
    label: "income",
    value: 1,
    },
    {
      label: "expense",
      value: 2,
    },
  ]
   
  export default transactionData;