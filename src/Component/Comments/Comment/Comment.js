const Comment = (props) => {

    const {name, email, body, id} = props

    return (
        <div className={'Items'}>
            --{id}
            --{name}
            --{email}
            --{body}
        </div>
    )
}

export default Comment