export const getGenres = (books) => {
    let genres = {};
    books.forEach(book => {
        genres[book.genre] = 1
    })
    return Object.keys(genres);
}