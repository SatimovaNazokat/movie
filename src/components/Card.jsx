import React from "react"

export const Card =() =>{
    return  (
        <div class="card w-74 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-error">&#9733;</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-start">
             <button className="btn btn-sm btn-primary mt-4 ">WATCH</button>
          </div>
        </div>
      </div> 

    )
}

