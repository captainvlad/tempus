function users(state={
    userid: 0,
    availible: false,
    error: false
}, action) {
    switch (action.type) {
        case 1: {
            return {...state, error: true}
        }
        case 2: {
            return {...state, availible: true}
        }
    }
}

export default users;