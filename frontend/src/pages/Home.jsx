import React from "react";
import { Link } from 'react-router-dom'
import '../styles/globalis.css'
import Valaszto from "../elements/Agazat";
import Elozetes from "../elements/Tablazat";
import { useState, useEffect } from "react"

const Home = (() => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 hatter">
                        <h3><br/>Központi felvételi<br/> tájékoztató</h3><br/>
                        <p>A középiskolákba történő jelentkezés során az<br/> iskolák határozzák meg, hogy a felvételi rangsort<br/> mi alapján döntik el. A Jószakma Szakgimnázium<br/> a felvételi során az általános iskolából hozott és a<br/> központi felvételin szerzett pontok alapján<br/> rangsorolja az iskolába jelentkezőket.</p>
                        <Link to="">Tájékoztató oldal</Link><br />
                        <img src="logo.png" alt="OKTATÁSI HIVATAL" />
                    </div>
                    <div className="col-4">
                        <h1>Tájékoztatás</h1><br/>
                        <h3>Jószakma Szakgimnázium</h3><br/>
                        <p>A központi felvételit magyar nyelv és irodalom,<br/> illetve matematika tantárgyakból írják a<br/> jelentkezők. Mindkét tárgy esetén legfeljebb 50<br/> pont szerezhető. A felvételiző hozott pontjait az<br/> általános iskolai év végi eredményei alapján<br/> számolják, ez a pontszám legfeljebb 50 pont<br/> lehet. A hozott pontokat duplázzák. A központi<br/> felvételin szerzett és a hozott pontok összege<br/> adja a felvételiző összesített pontszámát.</p><br/>
                        <img src="emailmarketing.jpg"/>
                    </div>
                    <div className="col-4 hatter">
                        <h3><br/>Az oldal használatáról</h3><br/>
                        <h6>Ön az oldal használatával a következő<br/> információkhoz juthat hozzá</h6>
                        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                            <li className="ph3 pv3 bb b--light-silver">Előzetes rangsor: </li>
                            <ol>
                                <li className="flex items-center space-x-4 ph3 pv3 bb b--light-silver">Nevek</li>
                                <li className="flex items-center space-x-4 ph3 pv3 bb b--light-silver">Ágazat</li>
                                <li className="flex items-center space-x-4 ph3 pv3 bb b--light-silver">Összes pontszám</li>
                            </ol>
                            <li className="ph3 pv3 bb b--light-silver">Előzetes rangsor nyelvi előkészítő</li>
                            <li className="ph3 pv3 bb b--light-silver">A felvettek névsora</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h2>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h2>
                        <Valaszto />
                    </div>
                    <div className="col-8">
                        <Elozetes />
                    </div>
                </div>
            </div>
        </>
    )
})

export default Home