import axios from 'axios'

let hostname = ""
let path = window.location.pathname.includes('localhost');
if (!path) {
    hostname = "https://devconnector-backend.up.railway.app";
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export function getRandomString(length) {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export async function createUser(body) {
    try {
        const res = await axios.post(`${hostname}/api/users`, body, config);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    }

    catch (e) {
        const errors = e.response.data.errors;
        if (errors) {
            return { output: errors, type: "error" };
        }
    }
}

export async function loginUser(body) {
    try {
        const res = await axios.post(`${hostname}/api/auth`, body, config);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    }

    catch (e) {
        const errors = e.response.data.errors;
        if (errors) {
            return { output: errors, type: "error" };
        }
    }
}

export async function setAuthToken(token) {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export async function authenticateUser() {
    try {
        const res = await axios.get(`${hostname}/api/auth`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function getUserProfile() {
    try {
        const res = await axios.get(`${hostname}/api/profile/me`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function getAllProfiles() {
    try {
        const res = await axios.get(`${hostname}/api/profile`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function getProfileByUserID(id) {
    try {
        const res = await axios.get(`${hostname}/api/profile/user/${id}`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function getGithubRepos(username) {
    try {
        const res = await axios.get(`${hostname}/api/profile/github/${username}`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function createUserProfile(formData) {
    try {
        const res = await axios.post(`${hostname}/api/profile`, formData, config)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function addUserExperience(formData) {
    try {
        const res = await axios.put(`${hostname}/api/profile/experience`, formData, config)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function addUserEducation(formData) {
    try {
        const res = await axios.put(`${hostname}/api/profile/education`, formData, config)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function deleteUserExperience(id) {
    try {
        const res = await axios.delete(`${hostname}/api/profile/experience/${id}`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function deleteUserEducation(id) {
    try {
        const res = await axios.delete(`${hostname}/api/profile/education/${id}`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function deleteUserAccount() {
    try {
        const res = await axios.delete(`/${hostname}api/profile`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function fetchPosts() {
    try {
        const res = await axios.get(`${hostname}/api/posts`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}


export async function fetchPost(id) {
    try {
        const res = await axios.get(`${hostname}/api/posts/${id}`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function likePost(id) {
    try {
        const res = await axios.put(`${hostname}/api/posts/like/${id}`);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function unlikePost(id) {
    try {
        const res = await axios.put(`${hostname}/api/posts/unlike/${id}`);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function deleteOnePost(id) {
    try {
        const res = await axios.delete(`${hostname}/api/posts/${id}`);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function createPost(formData) {
    try {
        const res = await axios.post(`${hostname}/api/posts`, formData, config)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function createComment(postID, formData) {
    try {
        const res = await axios.post(`${hostname}/api/posts/comment/${postID}`, formData, config)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}

export async function deleteComment(postID, commentID) {
    try {
        const res = await axios.delete(`${hostname}/api/posts/comment/${postID}/${commentID}`)
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    } catch (error) {
        return { output: error, type: "error" };
    }
}