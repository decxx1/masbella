import { useState } from "react";

export function LineMdMapMarkerAltFilled(props) {
	return (<svg className="inline text-primary-100 w-11 h-11 pb-2 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><mask id="lineMdMapMarkerAltFilled0"><path fill="#fff" stroke="#fff" strokeLinecap="round" strokeWidth={2} d="M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"><animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></animate></path><circle cx={12} cy={9} r={2.5} fillOpacity={0}><animate fill="freeze" attributeName="fill-opacity" begin="0.3s" dur="0.15s" values="0;1"></animate></circle></mask><rect width={24} height={24} fill="currentColor" mask="url(#lineMdMapMarkerAltFilled0)"></rect></svg>);
}
export default function MapInteractive () {
    const mapDefault = '/img/map/map_full.webp';
    const [map, setMap] = useState(mapDefault);
    
    const malaga = '/img/map/map_malaga_01.webp';
    const cordoba = '/img/map/map_cordoba_01.webp';

    const updateMap = (city) => {
        setMap(city);
    }
    const showCard = (id) => {
        const titleElement = document.getElementById(id);
        const titlePosition = titleElement.getBoundingClientRect().top -100;

        
        window.scrollTo({
            behavior: 'smooth',
            top: titlePosition
        });
    }
    return(
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hero__text max-lg:mb-5 max-lg:text-center">
                    <h1><em className="lg:w-fit">Nuestros centros</em></h1>
                    <ul className="text-white font-semibold text-4xl cursor-pointer font-mono">
                        <li 
                            className="hover:font-bold hover:italic group mb-2"
                            onMouseEnter={() => updateMap(malaga)}
                            onMouseLeave={() => updateMap(mapDefault)}
                            onClick={() => showCard('malaga')}
                        >
                            <LineMdMapMarkerAltFilled />
                            Málaga
                        </li>
                        <li
                            className="hover:font-bold hover:italic group"
                            onMouseEnter={() => updateMap(cordoba)}
                            onMouseLeave={() => updateMap(mapDefault)}
                            onClick={() => showCard('cordoba')}
                        >
                            <LineMdMapMarkerAltFilled />
                           Córdoba
                        </li>
                    </ul>
                </div>
                <div>
                    <img className="mx-auto w-11/12 sm:w-10/12 md:w-7/12 lg:w-full" loading="eager" src={map} alt="Mapa centros de MasBella" />
                </div>
            </div>
        </div>
    )
}