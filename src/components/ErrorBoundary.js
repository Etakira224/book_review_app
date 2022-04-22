import * as React from "react";
import { App } from "../App";
import { BookListPage } from "../pages/BookListPage";
import { ProfileLoginPage } from "../pages/ProfileLoginPage";
import { ProfileSignupPage } from "../pages/ProfileSignupPage";
import { Header } from "./Header";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

//レンダリング前にエラーをキャッチする
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    //エラーが発生していたらフォールバックの文を表示
    if (this.state.hasError) {
      return <h1>エラーが発生しました。</h1>;
    }
    //そうでなければ子コンポーネントを表示
    return this.props.children; 
  }
}

<ErrorBoundary>
  <Header />
  <ProfileLoginPage/>
  <ProfileSignupPage/>
  <BookListPage/>
  <App />
</ErrorBoundary>