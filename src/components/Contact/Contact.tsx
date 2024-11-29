import { useState } from "react";
import SendIcon from "../../assets/send-icon.svg";
import "./Contact.scss";
import { useSendEmail } from "../../queries";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [statusMessage, setStatusMessage] = useState("");
  const { mutate, isPending } = useSendEmail();

  function resetForm() {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    const objectBodyRequest = {
      from: formData.email,
      to: "samuelperes257@gmail.com",
      subject: formData.subject,
      text: `Nome: ${formData.name}, Email: ${formData.email}, Mensagem: ${formData.message}`,
      html: `Nome: ${formData.name}, Email: ${formData.email}, Mensagem: ${formData.message}`,
    };
    mutate(objectBodyRequest, {
      onSuccess: () => {
        setStatusMessage("Mensagem enviada com sucesso");
        resetForm()
      },
      onError: () => {
        setStatusMessage(
          "Erro ao enviar mensagem. Envie um e-mail para samuelperes257@gmail.com"
        );
        resetForm()
      },
    });
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="header-section">
          <h1 id="title" className="title">
            Vamos conversar?
          </h1>
          <h2 className="subtitle">Entre em contato comigo!</h2>
        </div>
        <div className="info-contact">
          <form>
            <input
              type="text"
              id="nome"
              name="name"
              placeholder="Nome"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="assunto"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              id="mensagem"
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="submit-form">
              <button type="button" onClick={handleSubmitForm}>
                <img
                  src={SendIcon}
                  alt="Enviar informações para contato"
                />
              </button>
            </div>
            {isPending && (
              <p id="loading" className="response-forms">
                Carregando...
              </p>
            )}
            {statusMessage !== "" && (
              <p className="response-forms">
                {statusMessage}
              </p>
            )}
          </form>



        </div>
      </div>
    </section>
  );
};
