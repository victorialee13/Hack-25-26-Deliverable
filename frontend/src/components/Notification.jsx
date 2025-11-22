// reusing a notifcation component from a previous project
import { useEffect } from "react";
import "./Notification.css";

function Notification({ message, onClose, type = "success" }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 3000); // Auto-dismiss after 3 seconds

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div className={`notification notification-${type}`}>
			<div className="notification-content">
				<span className="notification-icon">
					{type === "success" ? "✓" : "✕"}
				</span>
				<span className="notification-message">{message}</span>
				<button
					className="notification-close"
					onClick={onClose}
					aria-label="Close notification"
				>
					X
				</button>
			</div>
		</div>
	);
}

export default Notification;

