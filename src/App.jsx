import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { UserProfile } from "./components/UserProfile";
import { Repositories } from "./components/Repositories";
import { UserProvider } from "./contexts/GithubProfileContext";

function App() {

  return (
    <UserProvider>
      <Header />
        <Layout>
          <UserProfile />
          <Repositories />
        </Layout>
    </UserProvider>
  );
}

export default App;
