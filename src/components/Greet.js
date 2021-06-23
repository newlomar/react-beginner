import React from 'react';

export const Greet = ({name, parentName}) => {
    return (
        <div>
            <h1>Hello {name} a.k.a {parentName}</h1>
        </div>
    )
}
// export default Greet;