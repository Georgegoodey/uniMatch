const Popup = () => {
    // const [openExperience, setOpenExperience] = useState();
  
    return (

<div key={index} style={{position:"fixed", width:"70%",height:"50%"}} className={`overflow-auto border top-25 start-15 border-3 px-3 pt-3 border-blueAccent bg-blue ${(job === openExperience) ? "d-block" : "d-none"}`}>
          <Stack direction='horizontal' className='justify-content-between'>
            <p className='fs-2 text-light mb-1'>{job.title}</p>
            <Button className='btn-close border border-3 border-blueAccent rounded-0' onClick={()=>setOpenExperience(null)}></Button>
          </Stack>
          <p className='fs-4 text-light text-opacity-50 mb-1'>{job.date}</p>
          <p className='fs-5 text-light text-opacity-75 mb-1'>{job.summary}</p>
          <p className='fs-6 text-light text-opacity-75 mt-2'>{job.description}</p>
          <div className='row justify-content-center'>
          <h3 className='col-auto'>Skills</h3>
          <div className='w-100'></div>
          {job.skills.map((skill, index) => (
            <div key={index} className="col-auto text-light text-opacity-75 fs-5 mx-2 my-2 border border-2 border-blueAccent bg-blueAccent bg-opacity-25 py-2 px-3 rounded-4 text-center">
              {skill}
            </div>
          ))}
          </div>
        </div>

);
};

export default Popup;