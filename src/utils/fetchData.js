export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

}
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };