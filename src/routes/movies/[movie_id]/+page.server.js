import db from '#lib/db.js';

export async function load({params}){
    //console.log(params.movie_id);

    let movie = await db.getMovie(params.movie_id);
    

    return {
        movie: movie
    }
}