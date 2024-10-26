import { useEffect } from 'react';
import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './UsersList.module.sass';
import defImage from './defaultPhoto.jpg';
import { getUsersThunk, removeUserThunk } from '../../store/slices/usersSlice';

export const UsersList = ({
  users,
  isFetching,
  error,
  getUsers,
  removeUser,
}) => {
  useEffect(() => {
    getUsers();
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
            <p>{JSON.stringify(u)}</p>
            <button onClick={() => removeUser(u.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ usersData }) => usersData;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersThunk()), //{type:'users/get'}
  removeUser: id => dispatch(removeUserThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
