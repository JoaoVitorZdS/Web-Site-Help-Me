import * as yup from "yup";
export const SignUpSchema = yup
  .object({
    name: yup.string().required("O nome é obrigatório!"),
    email: yup
      .string()
      .required("O Email é obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "A senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password")], "As senhas não correspondem"),
    bio: yup
      .string()
      .required("Diga um pouco sobre você")
      .min(20, "Digite pelo menos 20 caracteres"),
    contact: yup
      .string()
      .required("Deixe seu link de Perfil")
      .url("O contato precisa ser um link"),
    course_module: yup
      .string()
      .required("Selecione um Módulo")
      .min(2, "Selecione um módulo"),
  })
  .required();
