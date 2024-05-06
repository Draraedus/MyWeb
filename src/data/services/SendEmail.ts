import axios, { AxiosResponse } from "axios";
import { ContactEmailDataType } from "../@types/ContactType";

async function sendEmail(
  emailData: ContactEmailDataType
): Promise<AxiosResponse> {
  try {
    const response = await axios.post(
      "http://localhost:3001/send-email",
      emailData,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return response;
  } catch (error) {
    throw new Error(`Erro ao enviar o email: ${error}`);
  }
}

export default sendEmail;
