const ChatItem = ({message}) => {
    return (
        <li className={'list-group-item'}>
            {message.content}
        </li>
    )
}
export default ChatItem
