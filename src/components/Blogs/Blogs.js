import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qs-container'>
            <div className='questions'>
            <h3> 1. What is Context API?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            </div>

            <div className='questions'>
            <h3> 2. What are semantic tags?</h3>
            <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.</p>
            </div>

            <div className='questions'>
            <h3> 3. What is difference between inline and inline-block?</h3>
            <p>Compared to display: inline , the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.</p>
            </div>
        </div>
    );
};

export default Blogs;