import './MenuModal.scss';
import React from 'react';

function MenuModal(props) {
  console.log(props);
  return (
    <div className='menu-modal-background'>
      <div className='menu-modal-container'>
        <h2 className='menu-modal-header'>Menu</h2>
        <p>Tags:</p>
        {props.postTags1DArr.map((tag) => (
          <p>{tag}</p>
        ))}
        <div className='menu-modal-body'></div>
        <div className='menu-modal-footer'></div>
      </div>
    </div>
  );
}

export default MenuModal;
