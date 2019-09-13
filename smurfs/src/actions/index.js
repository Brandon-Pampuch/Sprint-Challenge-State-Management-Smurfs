import axios from 'axios'

export const getSmurfs = () => dispatch => {

    dispatch({ type: 'FETCH_SMURFS_START' });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>
            // console.log(res.data),
            dispatch({ type: 'FETCH_SMURFS_SUCCESS', payload: res.data })
        )
        .catch(err => dispatch({ type: 'FETCH_SMURFS_FAIL', payload: err }));
};
export const addSmurf = (smurf) => dispatch => {

    dispatch({ type: 'POST_SMURFS_START' });
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res =>

            dispatch({ type: 'POST_SMURFS_SUCCESS', payload: smurf })
        )
        .catch(err => dispatch({ type: 'POST_SMURFS_FAIL', payload: err }));
};