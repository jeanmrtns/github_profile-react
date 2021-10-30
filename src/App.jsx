import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <UserProfile />
      </Layout>
    </>
  );
}

export default App;
