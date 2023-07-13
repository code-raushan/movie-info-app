import Image from "next/image";

interface Movie{
    id: number;

}



export async function generateStaticParams(){
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      )    
    const res = await data.json()
    return res.results.map((movie:Movie)=>({
        movie: toString(movie.id)
    }))
}

export default async function MovieDetails({params}){
    // console.log(params);
    const {movie}=params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}});
    const res = await data.json()
    return (
        <div>
            <div>
                <h2 className="text-3xl">{res.title}</h2>
                <h2 className="text-2xl">{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                <h2 className="my-2 bg-green-500 px-2 py-1 inline-block rounded-md">{res.status}</h2>
            </div>
            <div className="flex justify-center items-center">
                <Image src={imagePath+res.backdrop_path} alt={res.title} height={1000} width={1000} 
                priority
                />
            </div>
            <div>
                <h2>{res.overview}</h2>
            </div>
        </div>
    )
}