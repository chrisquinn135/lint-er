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

      const options = ['Option 1', 'Option 2', 'Option 3'];
      const handleChange = event => {
        const selectedValue = event.target.value;
        parent.postMessage({ pluginMessage: { type: 'selectedValue', value: selectedValue } }, '*');
      };


    return (
    <div ref={ref}>

        <select className='border-round flexbox--right dropdown'  onClick={onClick}>
            <div>All Fonts</div>
            {isOpen ? <FontAwesomeIcon icon={faChevronUp} style={{color: "#6C6C70"}}/> : <FontAwesomeIcon icon={faChevronDown} style={{color: "#6C6C70"}}/>}
        </select>
        {isOpen && <Menu/>}

    </div>)
}

export default Dropdown
