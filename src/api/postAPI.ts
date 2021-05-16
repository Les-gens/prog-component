import axios from 'axios'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const SERVERURL = process.env.REACT_APP_SERVER_URL



async function getAllPosts () {
    const res = await axios.get(`${SERVERURL}/posts`)
    return res.data._embedded.postEntities ?? null
}

async function getPost (postID: Number) {

}

async function updatePost (postID: Number, postInformation : Object) {

}

async function deletePost (postID: Number) {

}

export { getAllPosts, getPost, updatePost, deletePost }
