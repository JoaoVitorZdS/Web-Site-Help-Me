import * as yup from "yup";
export const Loginschema = yup
  .object({
    email: yup
      .string()
      .required("O Email é obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "A senha precisa ter pelo menos 6 caracteres"),
  })
  .required();
