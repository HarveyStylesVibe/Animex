// api.js
export async function fetchAnime(page = 1) {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    const data = await res.json();
    return data.data; // return anime array
  } catch (error) {
    console.error("Failed to fetch anime:", error);
    return [];
  }
}
