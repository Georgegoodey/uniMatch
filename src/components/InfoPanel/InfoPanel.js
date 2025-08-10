import React from 'react';
import './InfoPanel.scss'
import { useInView } from 'react-intersection-observer';

const InfoPanel = ({ data }) => {

  return (
    <section id={`${data.id}`} className='justify-content-center row w-100 m-0'>
      <Panel datum={data}/>
    </section>
  );
};

const Panel = ({ datum }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Triggers when 10% of the element is in view
    triggerOnce: false, // Animation only happens once
  });

  return (
    <div ref={ref} className={`info-panel ${inView ? 'in-view' : 'out-view'} text-light pt-3 pb-1 px-3 m-4 col-10`}>
      <div className='d-lg-none d-block text-center'>
        <h2>{datum.title}</h2>
        <div className='fs-5' dangerouslySetInnerHTML={{ __html: datum.explanation }}></div>
        <ul>
          {datum.subData && datum.subData.map((subDatum, index) => (
            <SubPanel key={index} subDatum={subDatum} />
          ))}
        </ul>
      </div>
      <div className='d-lg-block d-none'>
        <h2>{datum.title}</h2>
        <div className='fs-5' dangerouslySetInnerHTML={{ __html: datum.explanation }}></div>
        <ul>
          {datum.subData && datum.subData.map((subDatum, index) => (
            <SubPanel key={index} subDatum={subDatum} fullSize={true} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const SubPanel = ({ subDatum, fullSize }) => {
  const { ref, inView } = useInView({
    threshold: 0.99,
    triggerOnce: false,
  });

  return (
    <li ref={ref} className={`info-subpanel ${inView ? 'in-view' : 'out-view'} ps-4 pe-3 pt-3 pb-1 my-3 text-start`}>
      <h3>{subDatum.title}</h3>
      <p className='h6 text-light text-opacity-50 mb-1'>{subDatum.date}</p>
      <p className='h5 text-light text-opacity-75 mb-1'>{subDatum.summary}</p>
      {fullSize &&
        <p className='text-light text-opacity-100 mb-1'>{subDatum.description}</p>
      }
      {subDatum.skills.length > 0 ?
        <div className='row justify-content-center'>
          <p className='col-auto fs-4'>Skills</p>
          <div className='w-100'></div>
          {subDatum.skills.map((skill, index) => (
            (index < 5 || fullSize) ?
              <div key={index} className="col-auto text-light text-opacity-75 mx-2 mb-2 border border-3 border-opacity border-blueAccent border-opacity-75 bg-black bg-opacity-10 py-1 px-2 text-center">
                {skill}
              </div>
              : null
          ))}
        </div>
        : null
      }
      <p className='h6 pb-1 pt-1 text-light text-opacity-50'>{subDatum.grades}</p>
    </li>
  );
};

export default InfoPanel;
