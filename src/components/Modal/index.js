import React from 'react';

const Modal = ({ onClose, currentApplication }) => {
    const { name, category, description, gitHub, site, index } = currentApplication;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/img/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <p><a href={gitHub}>Repository</a></p>
                <p><a href={site}>Deployed Site</a></p>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;