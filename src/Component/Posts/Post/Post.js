const Post = (props) => {

    const {id, body, title} = props

    return (
        <div className={'Items'}>
            --{id}
            --{title}
            --{body}
        </div>
    )
}

export default Post