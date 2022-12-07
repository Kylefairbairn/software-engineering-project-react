import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const MESSAGES_API = `${BASE_URL}/api/messages`;
const USERS_API = `${BASE_URL}/api/users`;


/**
 * Find all messages in the database
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findAllMessages = () =>
    axios.get(`${MESSAGES_API}`)
        .then(response => response.data)

/**
 * Find all messages that the specified user has sent
 * @param uid User's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findAllMessagesSentByUser = (uid) =>
    axios.get(`${USERS_API}/${uid}/sent`)
        .then(response => response.data)

// findAllMessagesInGroup

// userDeleteMessage

// userMessageGroup

// userEditMessage