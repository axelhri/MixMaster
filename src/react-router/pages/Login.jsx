import { Form, useNavigation } from "react-router-dom";

function Login() {
  const { state } = useNavigation();

  return (
    <section className="section">
      <div className="inside-content">
        <Form className="form" method="POST">
          <h5>Our Newsletter</h5>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-input" id="name" name="name" />
          </div>

          <div className="form-row">
            <label htmlFor="lastname" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-input"
              id="lastname"
              name="lastName"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
            />
          </div>

          <div className="form-row">
            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn submit-btn"
            >
              {state === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Login;
