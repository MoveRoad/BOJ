const API_ENDPOINT =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

const requestProductList = async (keyword) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}${keyword !== "" ? `/${keyword}` : ""}`
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("서버가 불량입니다.");
    }
  } catch (e) {
    throw new Error("무언가 잘못되었습니다.");
  }
};

export { requestProductList };
