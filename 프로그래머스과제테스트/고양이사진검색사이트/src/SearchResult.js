export default function SearchResult({ $target, initialData, onClick }) {
  this.state = initialData;
  this.onClick = onClick;

  this.$searchResult = document.createElement("div");
  this.$searchResult.className = "SearchResult";
  $target.appendChild(this.$searchResult);

  this.setState = (nextData) => {
    this.state = nextData;

    this.render();
  };

  this.render = () => {
    this.$searchResult.innerHTML =
      this.state.data.length !== 0
        ? this.state.data
            .map(
              (cat) => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
            )
            .join("")
        : `
        <div class="item">
          <p> 아쉽지만 검색 결과가 없어요 ㅠㅠ.. |</p>
        </div>
      `;

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.state.data[index]);
      });
    });
  };
}
