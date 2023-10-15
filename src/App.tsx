import { ToastContainer } from "@/shared/toastContainer";
import BasePage from "@/pages";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <BasePage />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
