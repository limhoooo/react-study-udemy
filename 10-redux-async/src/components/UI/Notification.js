import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';
  let msg = {};
  const pendingCode = { title: 'Sending...', message: 'Sending cart data!' }
  const successCode = { title: 'Success!', message: 'Sent cart data successfully!' }
  const errorCode = { title: 'Error!', message: 'Fetching cart data failed!' }

  switch (props.status) {
    case 'success':
      specialClasses = classes.success;
      msg = successCode;
      break;
    case 'pending':
      msg = pendingCode;
      break;
    case 'error':
      specialClasses = classes.success;
      msg = errorCode;
      break;
    default:
      break;
  }
  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{msg.title}</h2>
      <p>{msg.message}</p>
    </section>
  );
};

export default Notification;
