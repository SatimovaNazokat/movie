import React from "react";

export const Movie = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <div className="badge badge-accent mt-2">8.9 &#9733;</div>
                    <div className="divider"></div>
                    <h1 className="text-2x1 font-bold mb-5 text-succes">About Movie</h1>
                    <ul className="mt-10 flex flex-col gap-2">
                        <li>Original Title: <strong> Spider-Man </strong> </li>
                        <li>Popularyti:<strong>15,000 </strong></li>
                        <li>Votes:<strong>20.000 </strong> </li>
                        <li>Release date: <strong> 2021-12-15 </strong></li>
                        <li>Language: <strong>en</strong></li>
                    </ul>
                    <div className="divider mt-10"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Voluptas, minima?</p>
                </div>
            </div>
        </div>
    )
}