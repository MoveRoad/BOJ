import { requestProductList } from "../api/api.js";

const WEB_ENDPOINT = "/web/products/";

export default function ProductListPage({ $app }) {
  this.state = {
    productList: [],
  };

  this.$element = document.createElement("div");
  this.$element.className = "ProductListPage";
  $app.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const datas = this.state.productList.map((data) => {
      //data.price 100원단위 콤마처리필요

      return `
                <li class="Product" id="${data.id}">
                    <img src="${data.imageUrl}" id="${data.id}"></img>
                    <div class="Product_info">
                        <div>${data.name}</div>
                        <div>${data.price}원~</div>
                    </div>
                </li>
            `;
    });

    this.$element.innerHTML = `
            <div class="ProductListPage">
                <h1>상품목록</h1>
                <ul>${datas.join("")}</ul>
            </div>
        `;

    document.querySelectorAll(".Product").forEach(($data) => {
      $data.addEventListener("click", (e) => {
        location.replace(`${WEB_ENDPOINT}${e.target.id}`);
      });
    });
  };

  this.init = async () => {
    // try{
    const productList = await requestProductList("");

    console.log("요청 성공", productList);

    this.setState({ ...this.state, productList: productList });
    // }catch(e){
    //     throw new Error("서버가 잘못됨");
    // }
  };

  this.init();
}
