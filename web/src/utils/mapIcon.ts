import Leaflet from 'leaflet';
import mapMarkerImg from '../images/local.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [38, 48],
    iconAnchor: [19, 48],
    popupAnchor: [0, -60]
  })


export default mapIcon;