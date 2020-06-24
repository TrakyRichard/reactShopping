const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://traky-shopping.now.sh"
    : "http://localhost:3000";

export default baseUrl;
