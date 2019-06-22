import React from 'react';

function Wrapper(props) {
    return (
        <section className="wrapper">
            <div className="inner">
                {props.children}
            </div>
        </section>
    );
}

export default Wrapper;