import AddPost from './AddPost/AddPost';
import { Post } from './Post/Post';
import s from './SplitLayout.module.scss';
import { useState } from 'react';
import photoNull from '../../../../assets/camera_200.png';
import { useEffect } from 'react';
import { useMemo } from 'react';
function SplitLayout(props) {
  const initialState = useMemo(() => {
    return [
      {
        fullName: props.fullName,
        src: props.img === null ? photoNull : props.img,
        post: '1',
        id: '1',
        time: '',
      },
      {
        fullName: props.fullName,
        src: props.img === null ? photoNull : props.img,
        post: '2',
        id: '2',
        time: '',
      },
      {
        fullName: props.fullName,
        src: props.img === null ? photoNull : props.img,
        post: '3',
        id: '3',
        time: '',
      },
    ];
  }, [props.fullName, props.img]);

  const [post, setPost] = useState([]);
  useEffect(() => {
    setPost(initialState);
  }, [initialState]);

  if (post === null) {
    return;
  }
  let postElement = post.map((el) => {
    return (
      <Post
        id={el.id}
        src={el.src}
        fullName={el.fullName}
        post={el.post}
        time={'TODO Time'}
      />
    );
  });
  return (
    <div className={s.splitLayout}>
      <AddPost setPost={setPost} post={post} />
      {postElement}
    </div>
  );
}
export default SplitLayout;
