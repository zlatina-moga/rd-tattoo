import { Toast } from "react-bootstrap";
import { useNotificationContext } from "../../contexts/NotificationContext";

const Notification = () => {
    const {notification, hideNotification} = useNotificationContext()

    if (!notification.show) {
        return null;
    }

    return (
        <Toast className="d-inline-block m-1" bg={notification.type} onClose={hideNotification}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>
          {notification.message}
        </Toast.Body>
      </Toast>
    )
}

export default Notification;