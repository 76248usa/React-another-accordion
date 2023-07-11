import React, {useState} from 'react'

function Dropdown({options, onSelect, selection  }) {
    const [isOpen, setIsOpen] = useState(false);
    

    const handleClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    }

const renderedOptions = options.map((option, index) => {
    return <div 
    onClick = {()=>handleClick(option)}
    key={index}>
        {option.label}
    </div>
})
  return (
    <div>
        <div 
        onClick = {()=>setIsOpen(!isOpen)} >
        { selection ? selection :  'Select...'}</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown




