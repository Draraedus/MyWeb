import React, {useState} from "react";
import styles from "./Contact.module.css"

function Contact() {
  const [formData, setFormData] = useState({
    assunto: '',
    nome: '',
    conteudo: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Dados do formulário:', formData);
  };

  return (
    <div className={styles.contact_page}>

      <h2>Entre em Contato</h2>
      <p>Quer me enviar alguma sugestão, proposta ou critíca? preencha o formulário e envie.</p>

      <form onSubmit={handleSubmit} className={styles.contact_forms_container}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          required
        />

        <label htmlFor="assunto">Assunto:</label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          placeholder="Assunto da conversa"
          required
        />

        <label htmlFor="conteudo">Conteúdo:</label>
        <textarea
          id="conteudo"
          name="conteudo"
          value={formData.conteudo}
          onChange={handleChange}
          rows={4}
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
