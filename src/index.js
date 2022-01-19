import React,{useState} from 'react';
import ReactDom from 'react-dom';

//implicit return:>A function is returned values without using the return keyword
// Explicit Return:> A function is returned values using the return keyword


const RactFunction=()=>{
return<h1>HI SHANKAR</h1>

};
ReactDom.render(<RactFunction/>,document.getElementById('root'))/*The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object.*/
