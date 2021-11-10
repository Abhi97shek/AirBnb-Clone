import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';
const Map = ({searchResults}) => {

    const [selectedLocation,setSelectedLocation] = useState({});
    const coordinates = searchResults.map(result=> ({
        longitude:result.long,
        latitude:result.lat
    }));

    const center = getCenter(coordinates);
    const [viewport,setViewport] = useState({
        width:'100%',
        height:'100%',
        zoom:11,
        latitude:center.latitude,
        longitude:center.longitude

    });
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/abhi-shek1/ckvt3ayrw0e3f14pam0758pmy"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport)=> setViewport(nextViewport)}     
       >
            {searchResults.map(result=> (

                    <div  key={result.long}>
                        <Marker
                                longitude={result.long}
                                latitude={result.lat}
                                offsetLeft={-20}
                                offsetTop={-10}
                        >
                            <p role="img" aria-label="push-pin" onClick={()=>setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">📍</p>
                        </Marker>
                        {selectedLocation.long === result.long ? (

                                <Popup onClose={()=>setSelectedLocation({})} closeOnClick={true} 
                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    {result.title}
                                </Popup>
                        ): (false)
                        }
                    </div>
            ))}
       </ReactMapGL>
    )
}

export default Map;
