import React from 'react';
import './Posts.css';
import { PostsHeader } from './PostsHeader/PostsHeader';
import { Post } from './Post/Post';
import postImage from '../../../assets/images/postImage.jpg'

export const Posts = () => {
    return (
        <div className="postsWrapper">
            <PostsHeader />
            <section className="posts">
                <Post title='Post1'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                    liked
                />
                <Post title='Post2'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum ea voluptas doloribus quam perspiciatis quisquam similique corrupti distinctio repellendus,
                eveniet, cumque necessitatibus assumenda obcaecati quasi eos vero exercitationem, sint dignissimos.'
                    image={postImage}
                />
                <Post title='Post3'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum ea voluptas doloribus quam perspiciatis quisquam similique corrupti distinctio repellendus,
                eveniet, cumque necessitatibus assumenda obcaecati quasi eos vero exercitationem, sint dignissimos.'
                    image={postImage}
                    liked
                />
                <Post title='Post4'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum ea voluptas doloribus quam perspiciatis quisquam similique corrupti distinctio repellendus,
                eveniet, cumque necessitatibus assumenda obcaecati quasi eos vero exercitationem, sint dignissimos.'
                    liked
                />
                <Post title='Post5'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                    image={postImage}
                    liked
                />
                <Post title='Post6'
                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum ea voluptas doloribus quam perspiciatis quisquam similique corrupti distinctio repellendus,
                eveniet, cumque necessitatibus assumenda obcaecati quasi eos vero exercitationem, sint dignissimos.'
                    image={postImage}
                />
            </section>
        </div>
    )
}
