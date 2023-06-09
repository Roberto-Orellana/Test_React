


    const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=qpJUmqrcZHCh6b9Kk8CpK4GX2foD6bTI&q=${encodeURI(category)}&limit=10`;
        const result = await fetch(url);
        const { data } = await result.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url

            }
        });

      return gifs;
   
    }


export default getGifs;