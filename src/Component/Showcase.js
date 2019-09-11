import React, {useState, useEffect} from 'react';
import Card from './Card';
import axios from 'axios';

export default function Showcase(){

    const [title, settitle] = useState('');
    const [explanation, setexplanation] = useState('');
    const [picUrl, setpicUrl] = useState('');
    const [date, setdate] = useState('');
    const [copyright, setcopyright] = useState('');

    useEffect (()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then( res =>{
            const info = res.data;
            console.log(info);
            
            settitle(info.title);
            setexplanation(info.explanation);
            setpicUrl(info.url);
            setdate(info.date);
            setcopyright(info.copyright);

        })//then
        .catch( error => {
            console.log('Error:', error);
        })//catch
    })//effect

    return (
        <div className='card'>
            <Card 
                    title={title}
                    explanation={explanation}
                    picUrl={picUrl}
                    date={date}
                    copyright={copyright}
                    />
            

        </div>
    )//return
}//close showcase