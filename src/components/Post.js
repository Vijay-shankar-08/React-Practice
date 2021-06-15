import { connect } from 'react-redux';
import  { incrementCount }  from '../actions/PostActions'
import { getActivePosts } from '../selectors/PostSelector'
function Post(props) {
    return (
        <div><center>
            <h2>Posts List</h2>

            <button onClick={()=> props.increment()}>Increment Count </button>
            <div>{props.count}</div>

            <div>
                {props.posts.map((post) => (
                    <div
                        key={post.title}>{post.title}
                    </div>
                ))}
            </div>
            </center>
        </div>
    );
}


// const getActivePosts = (posts,choice) => {
//     console.log("triggered")
//     switch(choice){
//         case 'SHOW_ACTIVE':
//             return posts.filter((post)=> post.isActive)      
//         case 'SHOW_INACTIVE':
//             return  posts.filter((post)=> !post.isActive)  
//         default:
//             return posts    
//     };
// };

const mapStateToProps = (state) => {
    return {
        posts: getActivePosts(state),
        count: state.count
       
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        increment : ()=> dispatch(incrementCount())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)