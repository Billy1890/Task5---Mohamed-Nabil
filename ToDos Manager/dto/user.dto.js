const UserDto = ({_id, name, email, role, createdAt}) => {
    return ({
        id: _id,
        name,
        email,
        role,
        createdAt
    })
}

module.exports = {UserDto}