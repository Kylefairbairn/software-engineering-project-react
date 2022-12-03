import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL
const GROUPS_API = `${BASE_URL}/api/groups`

// Allows axios to connect user session with user
const api = axios.create({
    withCredentials: true
})

/**
 * Create a group
 * @param uid User's primary key
 * @param group Group information such as members, admins, groupName, and description
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const createGroup = (uid, group) =>
    axios.post(`${GROUPS_API}/${uid}`, group)
        .then(response => response.data)

/**
 * Find all Groups user is in
 * @param uid User's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findGroupsForUser = (uid) =>
    axios.get(`${GROUPS_API}/user/${uid}`)
        .then(response => response.data)

/**
 * Find group by group name
 * @param uid User's primary key
 * @param name Group name
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findGroupByName = (uid, name) =>
    axios.get(`${GROUPS_API}/user/${uid}/${name}`)
        .then(response => response.data)

/**
 * Find group by group id
 * @param gid Group's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findGroupByGroupId = (gid) =>
    axios.get(`${GROUPS_API}/${gid}`)
        .then(response => response.data)

/**
 * Find all common groups between two users
 * @param uid User's primary key
 * @param ouid Other User's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const findAllCommonGroups = (uid, ouid) =>
    axios.get(`${GROUPS_API}/${uid}/common/${ouid}`)
        .then(response => response.data)
/**
 * Update Group
 * @param gid Groups' primary key
 * @param group Group that will replace current group
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const updateGroup = (gid, group) =>
    axios.put(`${GROUPS_API}/${gid}`, group)
        .then(response => response.data)

/**
 * Delete Group
 * @param uid User's primary key
 * @param gid Group's primary key
 * @returns {Promise<AxiosResponse<any>>} Promises to return the data from response
 */
export const deleteGroup = (uid, gid) =>
    axios.delete(`${GROUPS_API}/${uid}/${gid}`)
        .then(response => response.data)
