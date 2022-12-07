import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const MESSAGES_API = `${BASE_URL}/api/messages`;


/**
 * Find all messages in the database
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findAllMessages = () =>
    axios.get(`${MESSAGES_API}`)
        .then(response => response.data)



// findAllMessagesSentByUser

// findAllMessagesInGroup

// userDeleteMessage

// userMessageGroup

// userEditMessage