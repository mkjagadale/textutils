import React from 'react'

export default function Alert(props) {
  const textCamelCase =  (word) => {
    //console.log('word----', word);
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        {textCamelCase(props.alert.type)} : {textCamelCase(props.alert.msg)}
    </div>
  )
}
