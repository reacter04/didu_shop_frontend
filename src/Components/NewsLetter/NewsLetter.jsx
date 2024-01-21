import React from 'react';
import "./NewsLetter.css"

function NewsLetter() {
    return (
        <div className='newsletter'>
            <h1>Primeste ofertele noi pe e-mail</h1>
            <p>Aboneaza-te la buletinul nostru pentru a fi primul care afla despre produsele noi</p>
            <div>
                <input type="email" placeholder='Scrie e-mailul tau' />
                <button>Aboneaza-te</button>
            </div>
        </div>
    )
}

export default NewsLetter
