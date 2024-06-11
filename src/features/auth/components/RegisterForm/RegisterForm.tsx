import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@app/hooks';
import {Grid, Typography, Button} from '@mui/material';
import {TextField} from '@components/common/UI';
import {RegisterCredentials} from '@features/auth/authTypes';
import {register} from '@features/auth/authThunks';
import {selectAuthLoading, selectAuthError} from '@features/auth/authSelectors';
import {registerInputFields} from '@config/auth/registerInputFields';

interface Props {
  onSubmit: (credentials: RegisterCredentials) => void;
}

const RegisterForm: React.FC<Props> = ({onSubmit}) => {
  const [formData, setFormData] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Register
          </Typography>
        </Grid>
        {registerInputFields.map(field => (
          <Grid item xs={12} key={field.name}>
            <TextField
              label={field.label}
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof RegisterCredentials]}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Typography variant='body2' color='error'>
              {error}
            </Typography>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default RegisterForm;
