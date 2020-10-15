import React from 'react';
import localImg from '../images/local.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrphanatesMap (){
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
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanatesMap;