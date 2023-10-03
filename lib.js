import axios from "axios";

async function DataWrite(User_Id){
    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + User_Id);
    const {data:post} = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + User_Id);
    console.log("User",user,"User",post);
};

export default DataWrite;