import React, { useState } from "react";
import styles from "./Contact.module.css";
import SendEmail from "../../data/services/SendEmail";
import { ContactEmailDataType } from "../../data/@types/ContactType";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState<ContactEmailDataType>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = window.confirm(
      "Você confirma a sua solicitação de contato?"
    );

    if (!result) return;

    try {
      await SendEmail(formData);
      toast.success("Email enviado!");
    } catch (error) {
      toast.error("Ah, não foi possível enviar o email.");
    }
  };

  return (
    <div className={styles.contact_page}>
      <h2>Entre em Contato</h2>
      <p>
        Quer me enviar alguma sugestão, proposta ou critíca? preencha o
        formulário e envie. As entradas com * são obrigatórias.
      </p>
      <p>NEW: Funcionalidade de contato ON!</p>

      <form onSubmit={handleSubmit} className={styles.contact_forms_container}>
        <label htmlFor="name">Seu nome:*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
          required
        />

        <label htmlFor="email">Email para contato:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu Email"
        />

        <label htmlFor="subject">Assunto:*</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Assunto da conversa"
          required
        />

        <label htmlFor="content">Conteúdo da mensagem:*</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={8}
          cols={50}
          placeholder="Conteúdo da conversa"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
