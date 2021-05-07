export const callApi = ({api, successCb, failureCb}) => {
    api.then(resp => {
        return resp.json();
    }).then(data => {
        if (data.errors) {
            throw new Error (data.errors);
        }
        successCb(data);
    }).catch(err => {
        failureCb(err.messsage);
    })
}