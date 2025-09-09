"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// 🔹 Schema de validação com Zod
const formSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

const SignInForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("✅ Formulário enviado:", values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
        <CardDescription>Faça login para continuar.</CardDescription>
      </CardHeader>

      {/* 🔹 Esse "Form" é do shadcn/ui */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="grid gap-6">
            {/* Campo Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Senha */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter>
            <Button type="submit">Entrar</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SignInForm;

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, useForm } from "react-hook-form";
// import z from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   email: z.email(),
//   password: z.string().min(8, "A senha deve ter no mínimo 6 caracteres"),
// });

// type FormValues = z.infer<typeof formSchema>;

// const SignInForm = () => {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: FormValues) {
//     console.log("Form submitted:", values);
//     console.log(values);
//   }

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <CardTitle>Entrar</CardTitle>
//           <CardDescription>
//             Faça login  para continuar.
//           </CardDescription>
//         </CardHeader>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             {" "}
//             {/* <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Digite seu email" {...field} />
//                   </FormControl>

//                   <FormMessage />
//                 </FormItem>
//               )}
//             /> */}
//             {/* </Form> */}
//             <CardContent className="grid gap-6">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Username</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Digite seu email" {...field} />
//                     </FormControl>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Senha</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Digite seu senha"
//                         type="password"
//                         {...field}
//                       />
//                     </FormControl>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </CardContent>
//             <CardFooter>
//               <Button type="submit">Entrar</Button>
//             </CardFooter>
//           </form>
//         </Form>
//       </Card>
//     </>
//   );
// };

// export default SignInForm;
