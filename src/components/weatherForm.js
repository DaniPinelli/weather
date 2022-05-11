import { useState } from 'react';

export default function WeatherForm({ onChamgeCity }) {

    const [city, setCity] = useState('');

    function onChange(e) {
        const value = e.target.value;

        if (value !== '') {
            setCity(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        onChamgeCity(city);
    }

    return <form onSubmit{handleSubmit} >
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
    </form>
}