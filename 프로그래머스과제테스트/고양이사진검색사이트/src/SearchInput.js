//const TEMPLATE = '<input type="text">';

export default function SearchInput({ $target, onSearch }) {
  this.state = {
    keyword: [],
  };

  this.$searchInput = document.createElement("input");
  this.$searchInput.placeholder = "고양이를 검색해보세요.|";

  this.$searchInput.className = "SearchInput";
  this.$searchInput.setAttribute("autofocus", "autofocus");

  this.$keywordList = document.createElement("div");
  this.$keywordList.className = "keyword-wrapper";

  $target.appendChild(this.$searchInput);
  $target.appendChild(this.$keywordList);

  this.$searchInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      onSearch(e.target.value);
    }
  });

  this.$searchInput.addEventListener("click", (e) => {
    e.target.value = "";
  });

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  console.log("SearchInput created.", this);

  this.render = () => {
    if (this.state.keyword.length > 0) {
      const keywords = this.state.keyword.map((word, index) => {
        return `
          <div class="keyword" id="${index}">
            <p>${word}</p>
          </div>
        `;
      });

      this.$keywordList.innerHTML = `
          ${keywords.join("")}
      `;
    }
  };
}
