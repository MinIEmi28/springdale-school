import React from 'react';
import './methodology.css';

const Methodology = () => {
  return (
    <section className="section white client-feedback pb-4 container">
      <div className="d-flex flex-column " >
        <div className="p-2 mt-5">
          <p className="sec-heading">OUR METHODOLOGIES</p>
        </div>
        <div className="d-flex ">
            <div className="flex-item me-5">
            <div className="py-2">
                <h3>TEACHING METHODOLOGIES</h3>
                <p>
            We use a blend of traditional and modern teaching techniques to cater to different learning styles
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            tempore aliquid! Incidunt tempora reiciendis assumenda optio corporis
            dolorum ut ad reprehenderit ducimus, aut neque fugit laborum
            provident, ex impedit obcaecati libero cum in. Ipsa, nemo.
            </p>
            </div>
           

            </div>
            <div className="flex-item ms-5">
            <div className="py-2">
            <h3>EDUCATIONAL RESOURCES</h3>
            <p>
            Digital classrooms, interactive learning modules, and access to online educational platforms.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni placeat repudiandae, labore quod iure recusandae accusantium autem commodi magnam quos at suscipit nam enim! Velit voluptatem ea quaerat ad optio!
            </p>
            </div>
            
            </div>
        </div>
        
        <p style={{ color: 'rgb(179, 177, 177)' }}>
          <b style={{ color: 'red' }}>JOHN DOE</b> - PRINCIPAL
          SPRINGDALE..
        </p>
      </div>
    </section>
  );
}

export default Methodology;
