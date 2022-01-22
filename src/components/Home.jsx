import { Navbar, Welcome, Footer, Services } from 'components';
const styles = {
  contents: {
   // display: "flex",
    //width: "100%",
    //justifyContent: "center",
    //fontFamily: "Roboto, sans-serif",
    //color: "#041836",
    //marginTop: "130px",
    //padding: "10px",
  }
}

const App = () => {

  return (
    <div>
    <div>
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
    </div>
  );
}

export default App;
