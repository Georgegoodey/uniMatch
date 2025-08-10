import React from 'react';
import './Header.scss';
import sections from './sections.json';
// import { Button, Stack } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

const Header = () => {

  const { ref, inView } = useInView({
    threshold: 0.15, // Triggers when 10% of the element is in view
    triggerOnce: false, // Animation only happens once
  });

  return (
    <section id='header' className='row justify-content-center w-100 m-0'>
      {/* <div className='info-panel d-none d-lg-block text-light text-center pt-4 pb-3 px-3 m-4 position-relative'>
        <h1 className='fs-1 fs-sm-3'>George Goodey</h1>
        <h5 className='text-light text-opacity-50'>Student at the University of Manchester</h5>
        <Stack id="page-section" direction='horizontal' gap={3} className='row justify-content-center'>
          {
            sections.map((section, index) => 
              <Button key={index} className={`nav-button mx-2 rounded-0 border border-3 border-${section.color}Accent bg-${section.color}Accent bg-opacity-10 border-opacity-25 px-3 pt-3 mt-3 col-auto`}>
                <a href={`/${section.url}`} className='link-underline nav-link link-underline-opacity-0 link-secondary'>
                  <Stack>
                    <svg style={{height:'4vh'}} xmlns="http://www.w3.org/2000/svg" viewBox={section.view} className='text-center'><path className='draw-icon' d={section.icon}/></svg>
                    <p className='fs-6 text-light text-opacity-75 mt-2 mb-1'>{section.name}</p>
                  </Stack>
                </a>
              </Button>
            )
          }
        </Stack>
      </div> */}
      <div ref={ref} className={`info-panel ${inView ? 'in-view' : 'out-view'} text-light text-center pt-4 pb-3 px-3 m-4 position-relative col-10`}>
        <h1 className='fs-1 fs-sm-3'>George Goodey</h1>
        <h5 className='text-light text-opacity-50'>Student at the University of Manchester</h5>
        <div id="page-section" className='row justify-content-center'>
          {
            sections.map((section, index) =>
              <NavItem item={section} key={index} />
            )
          }
        </div>
      </div>
    </section>
  );
};

const NavItem = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.99,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`info-subpanel ${inView ? 'in-view' : 'out-view'} rounded-0 my-2 px-0 mx-2 py-0 row justify-content-center col-3`}>
      <a href={`/${item.url}`} className='link-underline link-underline-opacity-0 link-secondary py-1 pt-3 px-1'>
        {/* <div className='row justify-content-center w-100'> */}
          <svg style={{ height: '5vh', background: 'rgba($blueAccent,0.25)'}} xmlns="http://www.w3.org/2000/svg" viewBox={item.view} className='nav-button text-center py-0'><path className='draw-icon' d={item.icon} /></svg>
          <p className='navitem-text fw-bolder text-light text-opacity-75 px-1 py-0 mt-1 mb-1'>{item.name}</p>
        {/* </div> */}
      </a>
    </div>
  );
};

export default Header;
