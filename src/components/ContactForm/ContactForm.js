import { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <input
        className="margin"
        required
        placeholder="Ingrese su nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="margin"
        required
        placeholder="Ingrese su telefono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="margin"
        required
        placeholder="Ingrese su Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit" className="btn btn-outline-dark margin">
        Generar orden
      </button>
    </form>
  );
};

export default ContactForm;
