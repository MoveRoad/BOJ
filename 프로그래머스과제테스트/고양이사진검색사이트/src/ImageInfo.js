export default function ImageInfo({ $target, data }) {
  const $imageInfo = document.createElement("div");
  $imageInfo.className = "ImageInfo";
  this.$imageInfo = $imageInfo;

  this.$imageInfo.addEventListener("click", (e) => {
    fadeOutEffect(this.$imageInfo);
  });

  $target.appendChild($imageInfo);

  this.state = data;
  //visible image

  this.setState = (nextData) => {
    this.state = nextData;

    this.render();
  };

  this.render = () => {
    if (this.state.visible) {
      const { name, url, temperament, origin } = this.state.data;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  };

  function fadeOutEffect(fadeTarget) {
    fadeTarget.style.opacity = 1;

    const rewind = setInterval(() => {
      if (fadeTarget.style.opacity > 0) fadeTarget.style.opacity -= 0.1;
      else {
        if (fadeTarget.style.display !== "none") {
          fadeTarget.style.display = "none";
          fadeTarget.style.opacity = 1;
        }
        clearInterval(rewind);
      }
    }, 100);
  }

  this.render();
}
