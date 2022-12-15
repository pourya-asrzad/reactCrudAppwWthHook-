import { createContext } from "react";

const EditUserContext = createContext({
  setId: "",
  setName: "",
  setUserName: "",
  id: "",
  name: "",
  username: "",
});
export default EditUserContext;
