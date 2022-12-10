import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const MESSAGES_API = `${BASE_URL}/api/messages`;
const USERS_API = `${BASE_URL}/api/users`;
const GROUPS_API = `${BASE_URL}/api/groups`;


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

/**
 * Find all messages sent in a specified group
 * @param gid Group's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findAllMessagesInGroup = (gid) =>
    axios.get(`${GROUPS_API}/${gid}/messages`)
        .then(response => response.data)

/**
 * Delete specified message
 * @param mid Messages's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const userDeleteMessage = (mid) =>
    axios.delete(`${MESSAGES_API}/${mid}`)
        .then(response => response.data)

/**
 * User creates a message to send to a group
 * @param uid User's primary key
 * @param gid Group's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const userMessageGroup = (uid, gid, message) =>
    axios.post(`${USERS_API}/${uid}/groups/${gid}`, message)
        .then(response => response.data)

/**
 * Edit specified message
 * @param mid Messages's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const userEditMessage = (mid, message) =>
    axios.put(`${MESSAGES_API}/${mid}`, message)
        .then(response => response.data)
