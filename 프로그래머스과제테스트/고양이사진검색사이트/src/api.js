const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const fetchCats = async (keyword) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}/api/cats/search?q=${keyword}`
    );

    return response.json();
  } catch (e) {
    throw new Error("무언가 잘못되었습니다.", e.message);
  }
};

const requestCatsDetail = async (catsID) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/api/cats/${catsID}`);

    return response.json();
  } catch (e) {
    throw new Error("무언가 잘못되었습니다.", e.message);
  }
};

export { fetchCats, requestCatsDetail };
