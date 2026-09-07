import AuthForm from "../components/auth/AuthForm";
// Login route uses the shared account form without signup-only fields.
export default function LoginPage() {
  return <AuthForm />;
}
