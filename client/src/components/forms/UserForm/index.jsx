import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import CONSTANTS from './../../../constants';
import styles from './UserForm.module.sass';
import { createUserThunk } from '../../../store/slices/usersSlice';

const { GENDERS } = CONSTANTS;

function UserForm ({ createUser }) {
  const initialValues = {
    nickname: '',
    email: '',
    passwHash: '',
    birthday: '',
    gender: GENDERS[0],
    // userPhoto: '',
  };

  const handleSubmit = (values, formikBag) => {
    if (!values.birthday) {
      delete values.birthday;
    }
    createUser(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.form}>
          <Input
            label='Nickname:'
            type='text'
            name='nickname'
            placeholder='Yournickname'
            classes={classes}
          />
          <Input
            label='Email:'
            type='email'
            name='email'
            placeholder='your@mail.com'
            classes={classes}
          />
          <Input
            label='Password:'
            type='password'
            name='passwHash'
            classes={classes}
          />
          <Input
            label='Birthday:'
            type='date'
            name='birthday'
            classes={classes}
          />
          {GENDERS.map(g => (
            <label key={g}>
              <Field type='radio' name='gender' value={g} />
              <span>{g} </span>
              <ErrorMessage name='gender' />
            </label>
          ))}
          {/* <label>
            <span>Photo:</span>
            <input type='file' name='userPhoto' />
          </label> */}
          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createUser: values => dispatch(createUserThunk(values)),
});

export default connect(null, mapDispatchToProps)(UserForm);
