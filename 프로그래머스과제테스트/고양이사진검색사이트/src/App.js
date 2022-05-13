import { fetchCats, requestCatsDetail } from "./api.js";
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import ImageInfo from "./ImageInfo.js";
import Loading from "./Loading.js";

export default function App({ $app }) {
  this.state = {
    data: [],
    keyword: [],
  };

  this.keywordState = (addKeyword) => {
    this.state.keyword = addKeyword;

    this.searchInput.setState(this.state.keyword);
  };

  this.setState = (nextState) => {
    this.state = nextState;

    this.searchResult.setState(this.state);
  };

  this.searchInput = new SearchInput({
    $target: $app,
    onSearch: async (keyword) => {
      this.loading.setState({ loading: true });
      const datas = await fetchCats(keyword);

      this.loading.setState({ loading: false });

      //this.keywordState({...this.state, keyword: [[...this.state[keyword]], keyword]});
      this.setState({ ...this.state, data: datas.data });
    },
  });

  this.searchResult = new SearchResult({
    $target: $app,
    initialData: this.state,
    onClick: async (image) => {
      this.loading.setState({ loading: true });
      const datas = await requestCatsDetail(image.id);

      this.loading.setState({ loading: false });

      this.imageInfo.setState({
        visible: true,
        data: datas.data,
      });
    },
  });

  this.imageInfo = new ImageInfo({
    $target: $app,
    data: {
      visible: false,
      data: null,
    },
  });

  this.loading = new Loading({
    $target: $app,
  });
}
