import React, { useState } from 'react'
import '../../styles/components.css'
import Menu from './Menu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'


const Dropdown = () => {

    const [isOpen, setOpen] = useState(false)

    const onClick = () => {
        setOpen(!isOpen);
    }

    return (
    <div>
        <div className='border-round flexbox--right dropdown' onClick={onClick}>
            <div>All Fonts</div>
            {isOpen ? <FontAwesomeIcon icon={faChevronUp} style={{color: "#6C6C70"}}/> : <FontAwesomeIcon icon={faChevronDown} style={{color: "#6C6C70"}}/>}
        </div>
        {isOpen ? <Menu /> : ""}
    </div>)
}

export default Dropdown
