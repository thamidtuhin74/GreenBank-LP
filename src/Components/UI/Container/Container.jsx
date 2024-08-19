import React from 'react';

const Container = ({children}) => {
    return (
        <div className="h-full w-full max-w-screen-[1410px] mx-auto!">
           {children} 
        </div>
    );
};

export default Container;