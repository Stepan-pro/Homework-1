const User = (props) => {
    const {id, name, surname, email} = props

    return (
        <div className={'Items'}>
            --{id}
            --{name}
            --{surname}
            --{email}
        </div>
    )

}

export default User