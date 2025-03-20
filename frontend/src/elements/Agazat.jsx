import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router";


const Valaszto = (() => {
    const [tagozatok, setTagozatok] = useState([]);
    const [valasztott, setValasztott] = useState("1");
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3301/tagozatok')
            .then(res => {
                setTagozatok(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    function kivalasztva(event) {
        const id = event.target.value
        console.log(id)
        setValasztott(id)
    }

    return (
        <>
            <label>Válassza ki, melyik ágazat adatait szeretné látni:</label>
            <select onChange={(e) => kivalasztva(e)} className="form-select">
                {tagozatok.map(tagozat => (
                    <option value={tagozat.akod}>{tagozat.agazat} {tagozat.nyek?.data[0] === 1 ? "(nyek)" : ""}</option>
                ))}
            </select> <br />
            <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy" onClick={() => {
                navigate("/tagozat/" + valasztott);
            }}>Adatok</button>
        </>
    )
})

export default Valaszto