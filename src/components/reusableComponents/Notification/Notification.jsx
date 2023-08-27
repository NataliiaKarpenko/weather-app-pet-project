import { Toaster } from 'react-hot-toast';
import { theme } from '../../../Styles/Theme';

const Notification = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 2000,
            style: {
              border: `2px solid ${theme().globalColors.error}`,
              color: ` ${theme().globalColors.error}`,
            },
            iconTheme: {
              primary: `${theme().globalColors.error}`,
              secondary: 'white',
            },
          },
        }}
      />
    </div>
  );
};
export default Notification;
