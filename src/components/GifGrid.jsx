import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs( category )



  return (
    <div>
      <h3>{category}</h3>
      {
        // isLoading 
        // ? (<h4>Cargando...</h4>)
        // :null 
        isLoading && (<h4>Cargando...</h4>) // and logico
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} //propagar props de image
          />
        ))}
      </div>
    </div>
  );
}
