import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@app/hooks';
import {Grid, Typography, Button} from '@mui/material';
import {TextField} from '@components/common/UI';
import {forgotPassword} from '@features/auth/authThunks';
import {selectAuthLoading, selectAuthError} from '@features/auth/authSelectors';
import {forgotPasswordInputFields} from '@config/auth/forgotPasswordInputFields';

interface Props {
  onSubmit: (email: string) => void;
}

const ForgotPasswordForm: React.FC<Props> = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Forgot Password
          </Typography>
        </Grid>
        {forgotPasswordInputFields.map(field => (
          <Grid item xs={12} key={field.name}>
            <TextField
              label={field.label}
              type={field.type}
              name={field.name}
              value={email}
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
            {loading ? 'Submitting...' : 'Submit'}
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

export default ForgotPasswordForm;
