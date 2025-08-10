import './Home.scss';
import React from 'react';
import Header from '../Header/Header';
// import AboutMe from '../AboutMe';
// import Education from '../Educations';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact';
// import Experience from '../Experience/Experience';

import categories from '../../assets/categories.json'
import data from '../../assets/data.json'
import InfoPanel from '../InfoPanel/InfoPanel';

function Home() {
    
    console.log(categories)
    categories.forEach(cat => {
        cat['subData'] = data.filter(datum => datum.category === cat.title)
        console.log(cat)
    });

    return (
        <div className="Home">
            <Header />
            {categories.map((category, index) => (
                <InfoPanel key={index} data={category}/>
            ))}
        </div>
    );
}

export default Home;