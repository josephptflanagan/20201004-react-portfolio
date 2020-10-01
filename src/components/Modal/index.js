import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, category, description, gitHub, site, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/img/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <p>{gitHub}</p>
                <p>{site}</p>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;