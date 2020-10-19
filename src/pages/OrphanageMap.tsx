import React from "react";
import Local from "../images/Local.svg";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import "../styles/pages/orphanateMap.css";

const MarkerIcon = Leaflet.icon({
  iconUrl: Local,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [172, 2],
});

function OrphanateMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={Local} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <span>Alcantara</span>
          <strong>São Gonçalo</strong>
        </footer>
      </aside>
      <Map
        center={[-22.821209, -43.004895]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        className="leaflet"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <Marker position={[-22.821209, -43.004895]} icon={MarkerIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar da meninas
            <Link to="/orphanage/1">
              <FiArrowRight size={20} color="#FFF"></FiArrowRight>
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanateMap;
