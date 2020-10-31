const remoteURL = "http://localhost:5000"

export default {
    getAll() {
        return fetch(`${remoteURL}/questions`).then(result => result.json())
    }
}