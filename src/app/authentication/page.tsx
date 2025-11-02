import {} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Header from "../../components/common/header";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <>
      <Header />

      <div className="flex w-full flex-col gap-6 bg-black p-5">
        <Tabs defaultValue="sign-in" className="w-full">
          <TabsList>
            <TabsTrigger value="sign-in">Entrar</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>
          {/* Component login */}
          <TabsContent value="sign-in" className="w-full">
            <SignInForm />
          </TabsContent>
          {/* Component register */}
          <TabsContent value="sign-up" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Authentication;
