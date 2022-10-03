import { toast } from "react-toastify";

export const successNotify = () => {

    toast.success("Success Notification !");
  };

  export const errorNotify = (message) => {
  toast.error(message);
  }