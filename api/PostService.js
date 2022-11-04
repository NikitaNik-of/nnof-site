import axios from "axios"

export default class PostService{
    static async getAll() {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params:{
                key: "AIzaSyA5j7R_iZRzQj2fMXiZV-HUEDifP1jlqOw",
                part: "snippet",
                playlistId: "UUamczE3xY8f_UcF4ItttVgA",
                maxResults: "4"
            }
        })
        return response
    }
}