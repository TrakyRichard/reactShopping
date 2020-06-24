const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://traky-shopping.now.sh"
    : "https://traky-shopping.herokuapp.com/";

export default baseUrl;
