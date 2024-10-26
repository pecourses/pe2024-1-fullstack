import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './UsersList.module.sass';
import defImage from './defaultPhoto.jpg';
import { useEffect, useState } from 'react';

export const UsersList = ({ /*users,*/ isFetching, error }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users?page=1&results=10')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(err => console.log('err :>> ', err));
  }, []);
  // TODO: localhost port move to constants
  return (
    <>
      <BeatLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <img
              src={u.image ? `http://localhost:5000/${u.image}` : defImage}
              alt={u.nickname}
              className={styles.userImage}
            />
            {JSON.stringify(u)}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ usersData }) => usersData;

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
