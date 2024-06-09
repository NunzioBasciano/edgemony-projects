const cardGen = (obj) => {

    const containerEl = document.createElement('div');
    containerEl.className = 'card';

    const titleCard = document.createElement('h2');
    titleCard.textContent = obj.title;
    titleCard.className = 'card-title';

    const imageEl = document.createElement('img');
    imageEl.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
    imageEl.alt = obj.original_title;
    imageEl.className = 'card-image';

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = truncateText(obj.overview, 100);
    descriptionEl.className = 'card-description';

    const voteEl = document.createElement('p');
    voteEl.textContent = `Valutazione ${obj.vote_average.toFixed(1)}`;
    voteEl.className = 'card-vote';

    containerEl.append(imageEl, titleCard, descriptionEl, voteEl);

    return containerEl;
}

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};


export {
    cardGen
}
