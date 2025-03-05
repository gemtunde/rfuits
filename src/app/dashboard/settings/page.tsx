"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AccountTab from "./AccountTab";
import NotificationTab from "./NotificationTab";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-1/2 grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6">
          <AccountTab />
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <NotificationTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
