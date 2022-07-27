import { Post } from "./Post";
import { posts } from '../data';

export function Posts(){
    const postDivs =posts.map((post)=> <Post post={post}/>)
    return (
        <div className='posts' id=''>
            {postDivs}
        </div>
    );
}