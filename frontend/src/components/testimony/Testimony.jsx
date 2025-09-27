import React from 'react';
import './testimony.css';

const Testimony = () => {
  // Create an array with 8 placeholders; user will add links/content later
  const boxes = new Array(8).fill(null).map((_, i) => ({ id: i + 1 }));

  return (
    <div id="testimony" className="testimony-section">
      <div className="container">
        <h2 className="testimony-title">Testimony</h2>
        <p className="testimony-sub">Client feedback and stories</p>
        <div className="testimony-grid">
          {boxes.map(box => (
            <a key={box.id} href="#" className="testimony-box" aria-label={`Testimony ${box.id}`}>
              <div className="box-inner">
                <div className="box-number">{box.id}</div>
                <div className="box-placeholder">Add testimony link/content</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
