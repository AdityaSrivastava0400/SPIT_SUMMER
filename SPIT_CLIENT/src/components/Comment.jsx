import React from 'react'

export const Comment = (props) => {
    const commentStyle = {
      backgroundColor: '#f0f0f0', // Example background color
      padding: '10px', // Example padding
      border: '1px solid #ccc', // Example border
    };
    const textstyle = {
        color: 'black', 
        fontSize: '16px', 
        fontWeight: '900', 
      };
    return (
      <div style={commentStyle}>
       <p style={textstyle}> {props.key}{props.comment}</p>
      </div>
    );
  };