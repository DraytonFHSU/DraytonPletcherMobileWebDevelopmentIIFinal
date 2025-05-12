const transactionData = [
    {
      id: 1,
      title: "Office Work",
      description: "Complete project report",
      category: "home",
      image: require("../../../assets/Mad_Duck.jpg"),
    },
    {
      id: 2,
      title: "Garden Work",
      description: "Water the plants",
      category: "office",
      image: require("../../../assets/Mad_Duck.jpg"),
    },
    {
      id: 3,
      title: "Shopping",
      description: "Buy milk and eggs",
      category: "misc",
      image: require("../../../assets/Mad_Duck.jpg"),
    },
  ];

  export const categories = [
    {
    label: "home",
    value: 1,
    },
    {
      label: "office",
      value: 2,
      },
      {
        label: "misc",
        value: 3,
        }
  ]
   
  export default transactionData;