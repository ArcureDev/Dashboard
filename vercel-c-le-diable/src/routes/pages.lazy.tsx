import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { FieldApi, useForm } from "@tanstack/react-form";
import { EgapC3 } from "@/utils/types.ts";
import { tuyau } from "@/utils/api.ts";

export const Route = createLazyFileRoute("/pages")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<EgapC3>({
    defaultValues: { name: "Default name", charts: [] },
    onSubmit: async ({ value }) => {
      return tuyau.pages.$post(value).unwrap();
    },
  });

  function handleNameBlur(
    field: FieldApi<EgapC3, "name", undefined, undefined, string>,
  ) {
    field.handleBlur();
    form.handleSubmit();
  }

  return (
    <div className="h-16 bg-gray-100 w-full flex justify-between p-2 items-center">
      <div>
        <form>
          <form.Field
            name="name"
            children={(field) => (
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input
                  id="name"
                  placeholder="Nom"
                  type={"text"}
                  name={field.name}
                  value={field.state.value}
                  onBlur={() => handleNameBlur(field)}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
        </form>
      </div>
      <Button> + Ajouter toto</Button>
    </div>
  );
}
