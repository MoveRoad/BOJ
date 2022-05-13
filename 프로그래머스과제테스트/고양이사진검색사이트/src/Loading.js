export default function Loading({ $target }) {
  this.$element = document.createElement("div");
  this.$element.className = "Loading-wrapper";
  $target.appendChild(this.$element);
  this.state = {
    loading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = this.state.loading
      ? `
            <div class="Loading">
                <div class="loading-context"> 불러오는 중입니다... <div>
            </div>
        `
      : "";
  };

  this.render();
}
