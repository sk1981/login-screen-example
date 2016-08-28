import React from "react";
import {render} from 'react-dom';
import "../style/main.scss";
import LoginForm from "./login/LoginForm";
import Banner from "./banner/Banner";

const App = (
  <main className="content">
    <Banner></Banner>
    <LoginForm>
    </LoginForm>
  </main>
);

render(App, document.querySelector('#target'));