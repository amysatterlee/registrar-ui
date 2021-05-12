export const callApi = ({api, successCb, failureCb}) => {
    api.then(resp => {
        console.log(resp);
        return resp.json();
    }).then(data => {
        console.log(data);
        if (data.errors) {
            throw new Error (data.errors);
        }
        successCb(data);
    }).catch(err => {
        console.log(err);
        failureCb(err.messsage);
    })
}

export const authHeaders = (token) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': token
    }
  };