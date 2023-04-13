import { Notify } from 'notiflix/build/notiflix-notify-aio';

const errorEmptyInput = () => {
  return Notify.failure(
    'Oops. The search field must not be empty. Enter your request.'
  );
};

Notify.init({
  width: '450px',
  distance: '20px',
  position: 'center-top',
  timeout: 2000,
});

export default errorEmptyInput;
