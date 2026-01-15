// main.js
import { fetchAnime } from "./api.js";
import {
  renderAnime,
  renderLoading,
  updateHero,
  renderLoadMoreLoading,
} from "./ui.js";
import { setupLoadMore, setupHeroNav, setupSearch } from "./events.js";
const animeListObj = {
  list: [],
  currentPage: 1,
  currentHeroIndex: 0,
};

document.addEventListener("DOMContentLoaded", async () => {
  renderLoading();
  animeListObj.list = await fetchAnime(animeListObj.currentPage);
  renderAnime(animeListObj.list);
  if (animeListObj.list.length > 0)
    updateHero(animeListObj.list[0], animeListObj.list);

  // Setup buttons
  setupLoadMore(animeListObj);
  setupHeroNav(animeListObj);
  setupSearch(animeListObj);
});
