import axios from "axios";

export default axios.create({
  baseURL: "https://cors.zimjs.com/https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer J8IlQ6CHenk7D59VQbZcqDqiLkhXq0dPFkyiihu2ASMHCl8QlffPUi3jSN0eTOs2rIbZx7S4ajh1yneMnzmQwGOit5Tp26yL9JBMjFXdAJ5fzczET3CDuZhP7zV5Y3Yx",
  },
});
