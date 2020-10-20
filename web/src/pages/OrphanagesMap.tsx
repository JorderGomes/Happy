import React, {useEffect, useState} from 'react';
import localImg from '../images/local.svg';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/pages/orphanages-map.css'

import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanatesMap (){

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
            
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={localImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>
                        Muitas crianças estão esperando pela 
                        sua visita :)
                    </p>
                </header>
                <footer>
                    <strong>Paraipaba</strong>
                    <span>Ceará</span>
                </footer>
            </aside>
            
            <Map  
                center={[-3.4345724,-39.1451705]}
                zoom={16}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                
                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            position={[orphanage.latitude , orphanage.longitude]}
                            icon={mapIcon}
                            key={orphanage.id}
                        >
                        <Popup 
                            closeButton={false} 
                            minWidth={240} 
                            maxWidth={240} 
                            className="map-popup"
                        >
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#FFF" />
                            </Link>
                        </Popup>
                    </Marker>
                    );
                })}
                
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanatesMap;