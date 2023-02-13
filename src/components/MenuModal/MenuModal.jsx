import './MenuModal.scss';
import React from 'react';

function MenuModal(props) {
  // console.log(props);
  return (
    <div className='menu-modal-background'>
      <div className='menu-modal-container'>
        <h2 className='menu-modal-title'>Menu</h2>
        <div className='menu-modal-tags__title-container'>
          <p className='menu-modal-tags__title'>General:</p>
        </div>

        <div className='menu-modal-tags__content-container'>
          <ul>
            <li>
              <p className='menu-modal-tags__content'>Movies</p>
            </li>
            <li>
              <p className='menu-modal-tags__content'>Games</p>
            </li>
            <li>
              <p className='menu-modal-tags__content'>Books</p>
            </li>
            <li>
              <p className='menu-modal-tags__content'>Sports</p>
            </li>
            <li>
              <p className='menu-modal-tags__content'>Design</p>
            </li>
            <li>
              <p className='menu-modal-tags__content'>Websites</p>
            </li>
          </ul>
        </div>

        <div className='menu-modal-body'></div>
        <div className='menu-modal-footer'></div>
      </div>
    </div>
  );
}

export default MenuModal;
