import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.scss';
import photoNull from '../../../assets/camera_200.png';
import axios from 'axios';

export function Users(props) {
  const [users, setUsers] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(10);

  useEffect(() => {
    if (isFetching) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`
        )
        .then((response) => {
          setUsers((prev) => [...prev, ...response.data.items]);
          setPageNumber((prev) => prev + 1);
          setTotalCount(response.data.totalCount);
        })
        .finally(setFetching(false));
    }
  }, [isFetching, pageNumber]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  function scrollHandler(e) {
    if (
      e.target.documentElement.scrollTop + window.innerHeight >=
        e.target.documentElement.scrollHeight &&
      totalCount > users.length
    ) {
      setFetching(true);
    }
  }

  function follow(id) {
    let copy = users.map((el) => {
      if (el.id === id) {
        el.followed = true;
      }
      return el;
    });
    setUsers(copy);
  }
  function unFollow(id) {
    let copy = users.map((el) => {
      if (el.id === id) {
        el.followed = false;
      }
      return el;
    });
    setUsers(copy);
  }

  return (
    <div className={s.users}>
      {users.map((el) => {
        return (
          <div className={s.flex__container}>
            <div>
              <span>
                <img
                  className={s.avatar}
                  src={el.photos.small === null ? photoNull : el.photos.small}
                  alt=""
                />
              </span>
            </div>
            <div>
              <div>
                <NavLink to={`/${el.id}`} className={s.name}>
                  {el.name}
                </NavLink>
              </div>
              <span className={s.description}>{el.status}</span>
              <button
                onClick={() => {
                  return el.followed === true ? unFollow(el.id) : follow(el.id);
                }}
                className={s.follow}>
                {el.followed ? 'Follow' : 'Unfollow'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// if (Math.ceil(props.totalCount / 10) > pageNumber) {
// }
