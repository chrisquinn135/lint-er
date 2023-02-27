import React, { useRef, useState,useEffect } from 'react'
import '../../styles/components.css'
import Menu from './Menu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'


const Dropdown = () => {

    const [isOpen, setOpen] = useState(false)
    const ref = useRef<HTMLInputElement>(null);

    const onClick = () => {
        setOpen(!isOpen);
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isOpen && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpen])



    return (
    <div ref={ref}>
        <div className='border-round flexbox--right dropdown'  onClick={onClick}>
            <div>All Fonts</div>
            {isOpen ? <FontAwesomeIcon icon={faChevronUp} style={{color: "#6C6C70"}}/> : <FontAwesomeIcon icon={faChevronDown} style={{color: "#6C6C70"}}/>}
        </div>
        {isOpen && <Menu/>}
    </div>)
}

export default Dropdown
