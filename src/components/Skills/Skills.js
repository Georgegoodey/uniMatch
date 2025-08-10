import React, { useState } from 'react';
import './Skills.scss';
import { useInView } from 'react-intersection-observer';
import InfoPanel from '../InfoPanel/InfoPanel';
import data from '../../assets/data.json'

const Skills = () => {

    const { ref, inView } = useInView({
        threshold: 0.001, // Triggers when 10% of the element is in view
        triggerOnce: false, // Animation only happens once
    });

    const [value, setValue] = useState('');
    const handleChange = (e) => {setValue(e.target.value);results['subData']=data.filter(datum => datum.skills.some(skill => skill.toLowerCase().includes(e.target.value.toLowerCase())));console.log(results)};

    const [results] = useState({
        "title": "Results",
        "id": "results",
        "subData": []
    });

    return (
        <div className="Skills">
        <section id='skills' className='row justify-content-center w-100 m-0'>
            <div ref={ref} className={`info-panel ${inView ? 'in-view' : 'out-view'} text-light text-center pt-4 pb-3 px-3 m-4 position-relative col-10`}>
                <h1 className='fs-1 fs-sm-3'>Skills</h1>
                <h5 className='text-light text-opacity-50'>Search through projects and experience by skills</h5>
                <div id="page-section" className='row justify-content-center'>
                    {
                        // sections.map((section, index) =>
                        //     <NavItem item={section} key={index} />
                        // )
                    }
                </div>
                {/* <form>
                    <div class="form-row align-items-center row">
                        <div class="col-7 my-1">
                            <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>
                        <div class="col-3 my-1">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form> */}
                <div className="d-flex form-inputs">
        <input style={{width: '100%'}} className="text-light text-opacity-100 mx-2 mb-2 border border-3 rounded rounded-1 border-blueAccent border-opacity-50 bg-blue bg-opacity-25 py-1 px-2" type="text" placeholder="Search any skill..." value={value} onChange={handleChange}/>
        {/* <i className="bx bx-search"></i> */}
        </div>
            </div>
            
        </section>
        <InfoPanel data={results}/>
        </div>
    );
};

export default Skills;
