import Movie from "../Movie";

export const metadata={
  title: 'Top Rated',
  description: 'Top rated movies over the time'
}

export default async function Upcoming() {
  // the movie database api for movies
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
//   console.log(res);
  return (
    <main>
      <div className="m-6 text-lg">Hello Next13 🔥</div>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie:any) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          );
        })}
      </div>
    </main>
  );
}
