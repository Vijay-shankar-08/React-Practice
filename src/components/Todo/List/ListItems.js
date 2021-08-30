import React from 'react';
import PropTypes from 'prop-types';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" aria-label='list' key={item.key}>
            <p>
                <input type="text" id={item.key} aria-label="edit" value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>

                    <button aria-label="delete" onClick={(e) => {
                        props.deleteItem(item.key)
                    }} >delete</button>
                </span>
            </p>

        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

ListItems.prototype = {
    setUpdate: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        key:PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        text:PropTypes.string.isRequired,

    }))
        
}

export default ListItems;