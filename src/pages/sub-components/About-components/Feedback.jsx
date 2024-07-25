import React from 'react';
import './feedback.css';

const Feedback = () => {
  return (
    <section className="section white container client-feedback pb-4">
      <div className="d-flex flex-column" style={{ width: '70%' }}>
        <div className="p-2 mt-5">
          <p className="sec-heading">STUDENTS FEEDBACK</p>
        </div>
        <div className="p-2">
          <h3>PEOPLE SAY ABOUT US</h3>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          tempore aliquid! Incidunt tempora reiciendis assumenda optio corporis
          dolorum ut ad reprehenderit ducimus, aut neque fugit laborum
          provident, ex impedit obcaecati libero cum in. Ipsa, nemo.
        </p>
        <p style={{ color: 'rgb(179, 177, 177)' }}>
          <b style={{ color: 'red' }}>JANNAT TUMPA</b> - COO, AMERIMAR
          ENTERPRISES, INC..
        </p>
      </div>
    </section>
  );
}

export default Feedback;
