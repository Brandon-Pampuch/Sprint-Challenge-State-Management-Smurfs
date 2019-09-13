import React from 'react';
import { useSelector } from 'react-redux'

const SmurfList = (props) => {

    const smurfs = useSelector(state => state)
    console.log('smurfs in list', smurfs[0].name)
    return (
        <>
            <h1>smurf list</h1>
            <div>
                {
                    smurfs.map((smurf) => {
                        return <p>{smurf.name}</p>
                    })

                }

            </div>
        </>
    );
}

export default SmurfList;