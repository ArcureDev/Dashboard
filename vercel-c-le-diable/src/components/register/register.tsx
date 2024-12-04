import { useForm } from "@tanstack/react-form";
import { BasicUser, Credentials } from "@/utils/types.ts";
import { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { tuyau } from "@/utils/api.ts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button.tsx";

export default function Register() {
  const registerQuery = useMutation<BasicUser, Error, Credentials>({
    mutationFn: (credentials) => {
      return tuyau.users.$post(credentials).unwrap();
    },
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const form = useForm<Credentials>({
    defaultValues: { email: "", password: "" },
    onSubmit: async ({ value }) => {
      registerQuery.mutate(value);
    },
  });

  function submitSearchForm(event: FormEvent) {
    event.stopPropagation();
    event.preventDefault();
    form.handleSubmit();
  }

  return (
    <main className="container">
      <h1>Inscription</h1>
      <form onSubmit={submitSearchForm} className="flex flex-col gap-3">
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
        <Button type="submit" className="self-start">
          Créer mon compte
        </Button>
      </form>
    </main>
  );
}
