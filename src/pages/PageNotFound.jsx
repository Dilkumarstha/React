import Nav from "../components/Nav";

const PageNotFound = () => {
  return (
    <div>

      <div style={styles.container}>
        <h1 style={styles.code}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn’t exist.</p>


      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#0A1F44",
  }
};

export default PageNotFound;
