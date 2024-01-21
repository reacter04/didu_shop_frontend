import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Descriere</div>
        <div className="description-box-nav-box fade">Recenzii (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Bun venit pe DIDU, destinația ta online pentru moda de calitate și
          ultimele tendințe vestimentare! Descoperă colecțiile noastre variate
          pentru femei, bărbați și copii, fiecare articol fiind atent selectat
          pentru a satisface diversele gusturi ale clienților noștri.{" "}
        </p>
        <p>
          Cu o interfață prietenoasă și navigare simplă, te invităm să explorezi
          universul nostru de haine elegante și accesorii trendy. Avem grijă să
          oferim descrieri detaliate și imagini de înaltă calitate pentru
          fiecare produs, pentru ca tu să poți face achiziții informate. Profită
          de ofertele noastre exclusive și beneficiază de livrare rapidă și
          opțiuni flexibile de plată. Bucură-te de experiența de cumpărare
          online la DIDU și transformă-ți garderoba într-un mod stilat și
          accesibil!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
