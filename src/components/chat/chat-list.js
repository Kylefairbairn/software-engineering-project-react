import ChatItem from "./chat-item";

const ChatList = (
    {
        chats = []
    }
) => {

    return (
        <>
            <ul className={'list-group'}>
                {
                    chats.map && chats.map(
                        message =>
                            <ChatItem key={message._id}
                                      message={message}/>)
                }
            </ul>
        </>
    )
}

export default ChatList
