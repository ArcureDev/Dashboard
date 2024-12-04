import { useMutation } from "@tanstack/react-query";
import { BasicUser, Credentials } from "@/utils/types.ts";
import { useForm } from "@tanstack/react-form";
import { FormEvent } from "react";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "@tanstack/react-router";
import { tuyau } from "@/utils/api.ts";

export default function Login() {
  const navigate = useNavigate({ from: "/logister" });

  const loginQuery = useMutation<BasicUser, Error, Credentials>({
    mutationFn: async (credentials) => {
      return tuyau.login.$post(credentials).unwrap();
    },
    onSuccess: () => {
      navigate({ to: "/pages" });
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const form = useForm<Credentials>({
    defaultValues: { email: "", password: "" },
    onSubmit: async ({ value }) => {
      loginQuery.mutate(value);
    },
  });

  function submitSearchForm(event: FormEvent) {
    event.stopPropagation();
    event.preventDefault();
    form.handleSubmit();
  }

  return (
    <main className="flex flex-col gap-2">
      <h1>Connexion</h1>
      <form onSubmit={submitSearchForm}>
        <form.Field
          name="email"
          children={(field) => (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                type={"email"}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                type={"password"}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <Button type="submit">Se connecter</Button>
      </form>
    </main>
  );
}
