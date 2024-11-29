import {useForm} from "@tanstack/react-form";
import {BasicUser, Credentials} from "../../utils/types.ts";
import {FormEvent} from "react";
import {useMutation} from "@tanstack/react-query";
import {buildHttpRequest, httpClient} from "../../utils/api.ts";

export default function Register() {
    const registerQuery = useMutation<BasicUser, Error, Credentials>({
        mutationFn: (credentials) => {
            return httpClient.post(buildHttpRequest('/users'), {json: credentials}).json();
        },
        onSuccess: () => {
            console.log('success')
        },
        onError: () => {
            console.log('error')
        }
    });

    const form = useForm<Credentials>({
        defaultValues: {email: undefined, password: undefined},
        onSubmit: async ({value}) => {
            registerQuery.mutate(value);
        }
    });

    function submitSearchForm(event: FormEvent) {
        event.stopPropagation();
        event.preventDefault();
        form.handleSubmit();
    }

    return (
            <main className="flex flex-col gap-2">
                <h1>Inscription</h1>
                <form onSubmit={submitSearchForm}>
                    <form.Field
                        name="email"
                        children={(field) => (
                            <>
                                <label htmlFor={field.name}>Email</label>
                                <input
                                    type={"email"}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </>
                        )}
                    />
                    <form.Field
                        name="password"
                        children={(field) => (
                            <>
                                <label htmlFor={field.name}>Password</label>
                                <input
                                    type={"password"}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </>
                        )}
                    />
                    <button type="submit">Créer mon compte</button>
                </form>
            </main>
    )
}