import { requestProductList } from "../api/api.js";

export default function ProductDetailPage({ $app, productID }) {
  this.state = {
    productID: productID,
    productDatas: {},
  };

  this.$element = document.createElement("div");
  this.$element.className = "ProductDetailPage";
  this.$element.id = this.state.productID;
  $app.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const datas = this.state.productList;

    const optionList = datas.productOptions.map((data) => {
      return `
                <option id="${data.id}">${data.name}</option>
            `;
    });

    this.$element.innerHTML = `
            <h1>${datas.name} 상품 정보</h1>
            <div class="ProductDetail">
                <img src="${datas.imageUrl}"></img>
                <div class="ProductDetail__info">
                    <h2>${datas.name}</h2>
                    <div class="ProductDetail__price">${datas.price}원~</div>
                    <select>
                        ${optionList.join("")}
                    </select>
                    <div class="ProductDetail__selectedOptions">
                        <h3>선택된 상품</h3>
                        <ul>
                            <li>
                                커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
                            </li>
                            <li>
                                커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
                            </li>
                        </ul>
                        <div class="ProductDetail__totalPrice">175,000원</div>
                        <button class="OrderButton">주문하기</button>
                    </div>
                </div>
            </div>
        `;
  };

  this.init = async () => {
    try {
      const productList = await requestProductList(this.state.productID);

      console.log("요청 성공", productList);

      this.setState({ ...this.state, productDatas: productList });
    } catch (e) {
      throw new Error("서버가 잘못됨");
    }
  };

  this.init();
}
