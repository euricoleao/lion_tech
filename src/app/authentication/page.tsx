import {} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 bg-blue-400 p-5">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        {/* Component login */}
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
        {/* Component register */}
        <TabsContent value="sign-up">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authentication;
