import { StreamChat } from "stream-chat"

const api_key = "uk9cegx68css";
const api_secret = "r5u9kv3wmw8yfr3ct2a9qnhkgwj6x26kq72munp5nv5gnh57fcg7qwr24npqb6av";
const user_id = "john";

export async function GET() {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    return Response.json({ message: 'hello world!' })
}